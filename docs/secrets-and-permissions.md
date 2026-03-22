# Secrets and Permissions

## Required GitHub Actions secrets

- `GH_HEARTBEAT_TOKEN`: used by the Daily Issue Agent for issue creation and project validation
- `GH_SCREENSHOTS_TOKEN`: used by the Screenshot Agent to write files into the screenshots repo
- `LINKEDIN_CLIENT_ID`: used by the Social Agent for semi-manual LinkedIn flows
- `LINKEDIN_CLIENT_SECRET`: used by the Social Agent for semi-manual LinkedIn flows
- `LINKEDIN_REFRESH_TOKEN`: used by the Social Agent for semi-manual LinkedIn flows

## Minimum token intent

- Daily Issue Agent:
  - repo issue access
  - project read or write access where needed
- Screenshot Agent:
  - contents write access on the screenshots repo
- Social Agent:
  - no hosted credential storage in Project Heartbeat
  - credentials are expected only in GitHub Actions secrets when semi-manual publishing is enabled

## MVP constraint

The frontend app does not persist long-lived secrets to a backend. Tokens entered into the setup UI are only for local-session GitHub API calls such as repository selection.

