export function validateConfig(config) {
  const errors = [];
  const warnings = [];

  if (!config.projectName.trim()) {
    errors.push("Project name is required.");
  }

  if (!config.repos.app.trim()) {
    errors.push("App repo is required.");
  }

  if (config.features.screenshotAgent && !config.repos.screenshots.trim()) {
    errors.push("Screenshots repo is required when Screenshot Agent is enabled.");
  }

  if (config.features.socialAgent && !config.repos.social.trim()) {
    errors.push("Social repo is required when Social Agent is enabled.");
  }

  const repoValues = [config.repos.app, config.repos.screenshots, config.repos.social]
    .filter(Boolean)
    .map((value) => value.trim());
  const uniqueRepos = new Set(repoValues);
  if (uniqueRepos.size !== repoValues.length) {
    warnings.push("The same repository is mapped to multiple roles. MVP docs assume distinct repos.");
  }

  if (config.features.dailyIssueAgent && !config.github.projectOwner.trim()) {
    warnings.push("GitHub project owner is blank. Daily Issue Agent will create issues but skip project validation.");
  }

  if (config.features.dailyIssueAgent && !config.github.projectNumber.trim()) {
    warnings.push("GitHub project number is blank. Daily Issue Agent will skip project field validation.");
  }

  if (config.features.dailyIssueAgent && !config.daily.schedule.trim()) {
    errors.push("Daily issue schedule is required when Daily Issue Agent is enabled.");
  }

  if (config.features.screenshotAgent && !config.screenshot.captureCommand.trim()) {
    errors.push("Screenshot capture command is required when Screenshot Agent is enabled.");
  }

  if (config.features.screenshotAgent && !config.screenshot.outputDirectory.trim()) {
    errors.push("Screenshot output directory is required when Screenshot Agent is enabled.");
  }

  if (config.features.screenshotAgent && !config.screenshot.schedule.trim()) {
    errors.push("Screenshot schedule is required when Screenshot Agent is enabled.");
  }

  if (config.features.socialAgent && !config.social.organizationUrn.trim()) {
    warnings.push("LinkedIn organization URN is blank. The Social Agent scaffold will generate placeholder content.");
  }

  if (config.social.publishingMode === "semi-manual") {
    warnings.push("Semi-manual publishing still requires GitHub Actions secrets for LinkedIn credentials.");
  }

  return { errors, warnings };
}
