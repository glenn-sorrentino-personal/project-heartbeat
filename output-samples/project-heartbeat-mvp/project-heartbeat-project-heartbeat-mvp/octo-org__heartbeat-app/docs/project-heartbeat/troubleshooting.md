# Troubleshooting

## Common setup failures

- Missing GH_HEARTBEAT_TOKEN: Daily Issue Agent will fail to create issues.
- Missing GH_SCREENSHOTS_TOKEN: Screenshot publishing cannot write into octo-org/heartbeat-screenshots.
- Missing project owner or project number: Daily Issue Agent will skip GitHub Project validation.
- Blank LinkedIn organization URN: Social artifacts will use placeholder copy.

## Diagnostics

- Trigger workflows manually with `dry_run` enabled.
- Confirm the repo mapping in `heartbeat.config.json`.
- Confirm workflow permissions are enabled at repo or org level.
