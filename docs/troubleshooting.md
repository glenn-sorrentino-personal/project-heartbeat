# Troubleshooting

## ZIP generation does not start

- Check validation output in the app.
- Confirm app repo is set.
- Confirm screenshots repo is set if Screenshot Agent is enabled.
- Confirm social repo is set if Social Agent is enabled.

## GitHub repositories do not load

- Confirm the token is valid and not expired.
- Confirm the token can read the target repositories.
- Retry with a fine-grained token scoped to the repos you want to configure.

## Daily Issue Agent skips project setup

- Confirm `github.projectOwner` and `github.projectNumber` are set in `heartbeat.config.json`.
- Confirm the target GitHub Project already exists.
- Confirm the `Agent Eligible` field exists on the project if you want validation to pass cleanly.

## Screenshot publishing fails

- Confirm screenshots exist in the configured output directory.
- Confirm the screenshot schedule and capture command are valid for your app repo.
- Confirm `GH_SCREENSHOTS_TOKEN` has write access to the screenshots repo.
- Confirm the publish branch exists.

## Social artifacts look generic

- Add a LinkedIn organization URN.
- Review the generated markdown and JSON artifacts before publishing.
- For MVP, expect manual or semi-manual final posting.
