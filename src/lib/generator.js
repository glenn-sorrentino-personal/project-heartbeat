import {
  createConfigFile,
  createDailyScript,
  createDailyWorkflow,
  createDependabotFile,
  createInstallManifest,
  createPackageDocsReadme,
  createRepoReadme,
  createRootReadme,
  createSchemaFile,
  createScreenshotScript,
  createScreenshotWorkflow,
  createSocialScript,
  createSocialWorkflow,
  createTroubleshootingGuide
} from "./templates.js";
import { joinPath, repoFolderName, slugify } from "./utils.js";

export function generatePackageFiles(config) {
  const packageRoot = `project-heartbeat-${slugify(config.projectName) || "mvp"}`;
  const appFolder = repoFolderName(config.repos.app, "app-repo");
  const screenshotsFolder = repoFolderName(config.repos.screenshots, "screenshots-repo");
  const socialFolder = repoFolderName(config.repos.social, "social-repo");
  const files = [];

  files.push({
    path: joinPath(packageRoot, "README.md"),
    content: createRootReadme(config)
  });

  files.push({
    path: joinPath(packageRoot, "project-heartbeat-manifest.json"),
    content: createInstallManifest(config)
  });

  files.push({
    path: joinPath(packageRoot, "schemas", "heartbeat.schema.json"),
    content: createSchemaFile()
  });

  files.push({
    path: joinPath(packageRoot, appFolder, "heartbeat.config.json"),
    content: createConfigFile(config)
  });

  files.push({
    path: joinPath(packageRoot, appFolder, "docs", "project-heartbeat", "README.md"),
    content: createPackageDocsReadme(config)
  });

  files.push({
    path: joinPath(packageRoot, appFolder, "docs", "project-heartbeat", "troubleshooting.md"),
    content: createTroubleshootingGuide(config)
  });

  files.push({
    path: joinPath(packageRoot, appFolder, "docs", "project-heartbeat", "repo-role.md"),
    content: createRepoReadme(config, "app")
  });

  if (config.features.dependabot) {
    files.push({
      path: joinPath(packageRoot, appFolder, ".github", "dependabot.yml"),
      content: createDependabotFile()
    });
  }

  if (config.features.dailyIssueAgent) {
    files.push({
      path: joinPath(packageRoot, appFolder, ".github", "workflows", "heartbeat-daily.yml"),
      content: createDailyWorkflow(config)
    });
    files.push({
      path: joinPath(packageRoot, appFolder, ".github", "scripts", "heartbeat-daily.mjs"),
      content: createDailyScript()
    });
  }

  if (config.features.screenshotAgent) {
    files.push({
      path: joinPath(packageRoot, appFolder, ".github", "workflows", "heartbeat-screenshots.yml"),
      content: createScreenshotWorkflow(config)
    });
    files.push({
      path: joinPath(packageRoot, appFolder, ".github", "scripts", "heartbeat-screenshots.mjs"),
      content: createScreenshotScript()
    });
  }

  files.push({
    path: joinPath(packageRoot, screenshotsFolder, "heartbeat.config.json"),
    content: createConfigFile(config)
  });

  files.push({
    path: joinPath(packageRoot, screenshotsFolder, "docs", "project-heartbeat", "repo-role.md"),
    content: createRepoReadme(config, "screenshots")
  });

  files.push({
    path: joinPath(packageRoot, screenshotsFolder, "docs", "project-heartbeat", "README.md"),
    content: createPackageDocsReadme(config)
  });

  files.push({
    path: joinPath(packageRoot, socialFolder, "heartbeat.config.json"),
    content: createConfigFile(config)
  });

  files.push({
    path: joinPath(packageRoot, socialFolder, "docs", "project-heartbeat", "repo-role.md"),
    content: createRepoReadme(config, "social")
  });

  files.push({
    path: joinPath(packageRoot, socialFolder, "docs", "project-heartbeat", "README.md"),
    content: createPackageDocsReadme(config)
  });

  if (config.features.socialAgent) {
    files.push({
      path: joinPath(packageRoot, socialFolder, ".github", "workflows", "heartbeat-social.yml"),
      content: createSocialWorkflow(config)
    });
    files.push({
      path: joinPath(packageRoot, socialFolder, ".github", "scripts", "heartbeat-social.mjs"),
      content: createSocialScript()
    });
  }

  return files;
}

