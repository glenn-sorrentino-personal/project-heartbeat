import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { defaultConfig } from "../src/lib/defaults.js";
import { generatePackageFiles } from "../src/lib/generator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outputRoot = path.join(root, "output-samples", "project-heartbeat-mvp");

const sampleConfig = {
  ...defaultConfig,
  projectName: "Project Heartbeat MVP",
  github: {
    ...defaultConfig.github,
    projectOwner: "octo-org",
    projectNumber: "7"
  },
  repos: {
    app: "octo-org/heartbeat-app",
    screenshots: "octo-org/heartbeat-screenshots",
    social: "octo-org/heartbeat-social"
  },
  social: {
    ...defaultConfig.social,
    organizationUrn: "urn:li:organization:123456",
    publishingMode: "manual"
  }
};

const files = generatePackageFiles(sampleConfig);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const file of files) {
  const destination = path.join(outputRoot, file.path);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, file.content, "utf8");
}

console.log(`Generated sample output into ${outputRoot}`);

