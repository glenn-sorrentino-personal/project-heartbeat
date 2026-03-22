export const heartbeatSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://project-heartbeat.local/schemas/heartbeat.schema.json",
  title: "Project Heartbeat Config",
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "projectName",
    "github",
    "repos",
    "features",
    "daily",
    "screenshot",
    "social",
    "secrets"
  ],
  properties: {
    schemaVersion: { type: "string" },
    projectName: { type: "string", minLength: 1 },
    github: {
      type: "object",
      additionalProperties: false,
      required: ["projectOwner", "projectNumber"],
      properties: {
        projectOwner: { type: "string" },
        projectNumber: { type: "string" }
      }
    },
    repos: {
      type: "object",
      additionalProperties: false,
      required: ["app", "screenshots", "social"],
      properties: {
        app: { type: "string" },
        screenshots: { type: "string" },
        social: { type: "string" }
      }
    },
    features: {
      type: "object",
      additionalProperties: false,
      required: ["dailyIssueAgent", "dependabot", "screenshotAgent", "socialAgent"],
      properties: {
        dailyIssueAgent: { type: "boolean" },
        dependabot: { type: "boolean" },
        screenshotAgent: { type: "boolean" },
        socialAgent: { type: "boolean" }
      }
    },
    daily: {
      type: "object",
      additionalProperties: false,
      required: ["schedule", "label", "issueTitleTemplate", "projectFieldName"],
      properties: {
        schedule: { type: "string" },
        label: { type: "string" },
        issueTitleTemplate: { type: "string" },
        projectFieldName: { type: "string" }
      }
    },
    screenshot: {
      type: "object",
      additionalProperties: false,
      required: ["captureCommand", "schedule", "outputDirectory", "publishBranch"],
      properties: {
        captureCommand: { type: "string" },
        schedule: { type: "string" },
        outputDirectory: { type: "string" },
        publishBranch: { type: "string" }
      }
    },
    social: {
      type: "object",
      additionalProperties: false,
      required: ["network", "organizationUrn", "publishingMode", "artifactDirectory"],
      properties: {
        network: { type: "string", enum: ["linkedin"] },
        organizationUrn: { type: "string" },
        publishingMode: { type: "string", enum: ["manual", "semi-manual"] },
        artifactDirectory: { type: "string" }
      }
    },
    secrets: {
      type: "object",
      additionalProperties: false,
      required: [
        "githubToken",
        "screenshotsRepoToken",
        "linkedInClientId",
        "linkedInClientSecret",
        "linkedInRefreshToken"
      ],
      properties: {
        githubToken: { type: "string" },
        screenshotsRepoToken: { type: "string" },
        linkedInClientId: { type: "string" },
        linkedInClientSecret: { type: "string" },
        linkedInRefreshToken: { type: "string" }
      }
    }
  }
};
