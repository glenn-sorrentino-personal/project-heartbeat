# Project Heartbeat

Project Heartbeat is a static setup app that generates GitHub-native maintenance automation for three repositories:

- App repo
- Screenshots repo
- Social repo

The current MVP implementation is designed around a static frontend plus generated GitHub Actions workflows and scripts.

## Local commands

```bash
npm run build
npm run generate:samples
npm run smoke
```

## Structure

- `src/`: static frontend for GitHub Pages
- `src/lib/`: shared generator, validation, GitHub API, and ZIP logic
- `schemas/`: config schema for generated `heartbeat.config.json`
- `scripts/`: local build and sample generation scripts
- `docs/`: feasibility plan, issue drafts, and generated output contract docs
- `output-samples/`: generated example package output

