import { defaultConfig } from "./lib/defaults.js";
import { generatePackageFiles } from "./lib/generator.js";
import { fetchRepositories } from "./lib/github.js";
import { validateConfig } from "./lib/validation.js";
import { downloadZip } from "./lib/zip.js";

const elements = {
  token: document.querySelector("#github-token"),
  loadRepos: document.querySelector("#load-repos"),
  repoStatus: document.querySelector("#repo-status"),
  repoOptions: document.querySelector("#repo-options"),
  projectName: document.querySelector("#project-name"),
  projectOwner: document.querySelector("#project-owner"),
  projectNumber: document.querySelector("#project-number"),
  dailySchedule: document.querySelector("#daily-schedule"),
  appRepo: document.querySelector("#app-repo"),
  screenshotsRepo: document.querySelector("#screenshots-repo"),
  socialRepo: document.querySelector("#social-repo"),
  issueLabel: document.querySelector("#issue-label"),
  enableDaily: document.querySelector("#enable-daily"),
  enableDependabot: document.querySelector("#enable-dependabot"),
  enableScreenshots: document.querySelector("#enable-screenshots"),
  enableSocial: document.querySelector("#enable-social"),
  captureCommand: document.querySelector("#capture-command"),
  screenshotSchedule: document.querySelector("#screenshot-schedule"),
  screenshotOutputDirectory: document.querySelector("#screenshot-output-directory"),
  linkedInOrganizationUrn: document.querySelector("#linkedin-organization-urn"),
  publishingMode: document.querySelector("#publishing-mode"),
  generatePackage: document.querySelector("#generate-package"),
  diagnostics: document.querySelector("#diagnostics"),
  configPreview: document.querySelector("#config-preview"),
  packagePreview: document.querySelector("#package-preview")
};

const state = {
  repositories: []
};

function hydrateDefaults() {
  elements.projectName.value = defaultConfig.projectName;
  elements.projectOwner.value = defaultConfig.github.projectOwner;
  elements.projectNumber.value = defaultConfig.github.projectNumber;
  elements.dailySchedule.value = defaultConfig.daily.schedule;
  elements.issueLabel.value = defaultConfig.daily.label;
  elements.captureCommand.value = defaultConfig.screenshot.captureCommand;
  elements.screenshotSchedule.value = defaultConfig.screenshot.schedule;
  elements.screenshotOutputDirectory.value = defaultConfig.screenshot.outputDirectory;
  elements.linkedInOrganizationUrn.value = defaultConfig.social.organizationUrn;
  elements.publishingMode.value = defaultConfig.social.publishingMode;
  elements.enableDaily.checked = defaultConfig.features.dailyIssueAgent;
  elements.enableDependabot.checked = defaultConfig.features.dependabot;
  elements.enableScreenshots.checked = defaultConfig.features.screenshotAgent;
  elements.enableSocial.checked = defaultConfig.features.socialAgent;
}

function collectConfig() {
  return {
    ...defaultConfig,
    projectName: elements.projectName.value.trim(),
    github: {
      ...defaultConfig.github,
      projectOwner: elements.projectOwner.value.trim(),
      projectNumber: elements.projectNumber.value.trim()
    },
    repos: {
      app: elements.appRepo.value.trim(),
      screenshots: elements.screenshotsRepo.value.trim(),
      social: elements.socialRepo.value.trim()
    },
    features: {
      dailyIssueAgent: elements.enableDaily.checked,
      dependabot: elements.enableDependabot.checked,
      screenshotAgent: elements.enableScreenshots.checked,
      socialAgent: elements.enableSocial.checked
    },
    daily: {
      ...defaultConfig.daily,
      schedule: elements.dailySchedule.value.trim(),
      label: elements.issueLabel.value.trim()
    },
    screenshot: {
      ...defaultConfig.screenshot,
      captureCommand: elements.captureCommand.value.trim(),
      schedule: elements.screenshotSchedule.value.trim(),
      outputDirectory: elements.screenshotOutputDirectory.value.trim()
    },
    social: {
      ...defaultConfig.social,
      organizationUrn: elements.linkedInOrganizationUrn.value.trim(),
      publishingMode: elements.publishingMode.value
    }
  };
}

function renderRepoOptions(repositories) {
  elements.repoOptions.replaceChildren(
    ...repositories.map((repository) => {
      const option = document.createElement("option");
      option.value = repository.full_name;
      return option;
    })
  );
}

function renderDiagnostics(diagnostics) {
  elements.diagnostics.innerHTML = "";

  const cards = [];
  if (diagnostics.errors.length > 0) {
    cards.push(buildDiagnosticCard("Errors", diagnostics.errors, "diagnostic-card-errors"));
  }
  if (diagnostics.warnings.length > 0) {
    cards.push(buildDiagnosticCard("Warnings", diagnostics.warnings, "diagnostic-card-warnings"));
  }
  cards.push(
    buildDiagnosticCard(
      "Info",
      [
        "Tokens are used only in the current browser session and are not sent to a Project Heartbeat backend.",
        "Generated workflows assume GitHub Actions will store long-lived secrets instead of the frontend."
      ],
      "diagnostic-card-info"
    )
  );

  elements.diagnostics.append(...cards);
}

function buildDiagnosticCard(title, items, className) {
  const wrapper = document.createElement("section");
  wrapper.className = `diagnostic-card ${className}`;
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("ul");
  for (const item of items) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
  }
  wrapper.append(heading, list);
  return wrapper;
}

function renderPreview() {
  const config = collectConfig();
  const diagnostics = validateConfig(config);
  const files = diagnostics.errors.length === 0 ? generatePackageFiles(config) : [];

  elements.configPreview.textContent = JSON.stringify(config, null, 2);
  elements.packagePreview.textContent =
    files.length === 0
      ? "Fix validation errors to preview generated files."
      : files.map((file) => file.path).join("\n");

  renderDiagnostics(diagnostics);
}

async function handleLoadRepos() {
  const token = elements.token.value.trim();
  if (!token) {
    elements.repoStatus.textContent = "Enter a GitHub token to load repositories.";
    return;
  }

  elements.repoStatus.textContent = "Loading repositories from GitHub...";
  try {
    const repositories = await fetchRepositories(token);
    state.repositories = repositories;
    renderRepoOptions(repositories);
    elements.repoStatus.textContent = `Loaded ${repositories.length} repositories.`;
  } catch (error) {
    elements.repoStatus.textContent = error instanceof Error ? error.message : "Failed to load repositories.";
  }
}

function handleGeneratePackage() {
  const config = collectConfig();
  const diagnostics = validateConfig(config);
  renderDiagnostics(diagnostics);

  if (diagnostics.errors.length > 0) {
    elements.packagePreview.textContent = "Fix validation errors before generating the ZIP package.";
    return;
  }

  const files = generatePackageFiles(config);
  const filename = `project-heartbeat-${config.projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "mvp"}.zip`;
  downloadZip(filename, files);
  elements.packagePreview.textContent = files.map((file) => file.path).join("\n");
}

hydrateDefaults();
renderPreview();

for (const element of Object.values(elements)) {
  if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
    element.addEventListener("input", renderPreview);
    element.addEventListener("change", renderPreview);
  }
}

elements.loadRepos.addEventListener("click", handleLoadRepos);
elements.generatePackage.addEventListener("click", handleGeneratePackage);
