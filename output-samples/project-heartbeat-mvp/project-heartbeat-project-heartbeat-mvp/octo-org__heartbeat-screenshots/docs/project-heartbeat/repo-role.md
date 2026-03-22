# Project Heartbeat for screenshots

This repository receives Project Heartbeat files for the `screenshots` role.

## Repo mapping

- App repo: octo-org/heartbeat-app
- Screenshots repo: octo-org/heartbeat-screenshots
- Social repo: octo-org/heartbeat-social

## Required secrets

- GH_HEARTBEAT_TOKEN: GitHub token for issue and project operations
- GH_SCREENSHOTS_TOKEN: token with write access to the screenshots repo
- LINKEDIN_CLIENT_ID: LinkedIn client ID for semi-manual social flows
- LINKEDIN_CLIENT_SECRET: LinkedIn client secret for semi-manual social flows
- LINKEDIN_REFRESH_TOKEN: LinkedIn refresh token for semi-manual social flows

## Dry-run guidance

- Use the `workflow_dispatch` trigger and set `dry_run` to `true` first.
- Check the workflow summary and artifacts before enabling schedules.
