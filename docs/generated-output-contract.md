# Generated Output Contract

Project Heartbeat generates a ZIP package with one root folder per run:

- `project-heartbeat-<slug>/README.md`
- `project-heartbeat-<slug>/project-heartbeat-manifest.json`
- `project-heartbeat-<slug>/schemas/heartbeat.schema.json`
- `project-heartbeat-<slug>/<app-repo-folder>/...`
- `project-heartbeat-<slug>/<screenshots-repo-folder>/...`
- `project-heartbeat-<slug>/<social-repo-folder>/...`

## App repo output

- `heartbeat.config.json`
- `.github/dependabot.yml`
- `.github/workflows/heartbeat-daily.yml`
- `.github/workflows/heartbeat-screenshots.yml`
- `.github/scripts/heartbeat-daily.mjs`
- `.github/scripts/heartbeat-screenshots.mjs`
- `docs/project-heartbeat/README.md`
- `docs/project-heartbeat/troubleshooting.md`

## Screenshots repo output

- `heartbeat.config.json`
- `docs/project-heartbeat/README.md`
- `docs/project-heartbeat/repo-role.md`

## Social repo output

- `heartbeat.config.json`
- `.github/workflows/heartbeat-social.yml`
- `.github/scripts/heartbeat-social.mjs`
- `docs/project-heartbeat/README.md`
- `docs/project-heartbeat/repo-role.md`

## Config contract

Generated config files follow [schemas/heartbeat.schema.json](/Users/glennsorrentino/Library/Mobile%20Documents/com~apple~CloudDocs/Git/project-heartbeat/schemas/heartbeat.schema.json).

Key sections:

- `github`: GitHub Project owner and project number
- `repos`: app, screenshots, and social repository mapping
- `features`: enabled agent toggles
- `daily`: schedule, label, issue title template, and project field name
- `screenshot`: capture command, schedule, output directory, and publish branch
- `social`: LinkedIn-oriented artifact generation settings
- `secrets`: expected GitHub Actions secret names
