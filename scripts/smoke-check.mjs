import { defaultConfig } from "../src/lib/defaults.js";
import { generatePackageFiles } from "../src/lib/generator.js";
import { validateConfig } from "../src/lib/validation.js";

const sampleConfig = {
  ...defaultConfig,
  projectName: "Smoke Check",
  github: {
    ...defaultConfig.github,
    projectOwner: "octo-org",
    projectNumber: "9"
  },
  repos: {
    app: "octo-org/smoke-app",
    screenshots: "octo-org/smoke-shots",
    social: "octo-org/smoke-social"
  }
};

const diagnostics = validateConfig(sampleConfig);

if (diagnostics.errors.length > 0) {
  console.error("Validation failed:");
  for (const error of diagnostics.errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

const files = generatePackageFiles(sampleConfig);

if (files.length < 10) {
  console.error(`Expected at least 10 generated files, received ${files.length}`);
  process.exit(1);
}

console.log(`Smoke check passed with ${files.length} generated files`);
if (diagnostics.warnings.length > 0) {
  console.log("Warnings:");
  for (const warning of diagnostics.warnings) {
    console.log(`- ${warning}`);
  }
}

