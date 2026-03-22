# Setup Guide

## Local development

1. Run `npm run build` to produce the static site in `dist/`.
2. Open `dist/index.html` in a browser or deploy `dist/` to GitHub Pages.
3. Enter a fine-grained GitHub token to load repo suggestions.
4. Map the app, screenshots, and social repos.
5. Generate the ZIP package and copy each repo folder into the matching repository.

## Install generated files

1. Copy the generated app repo files into your app repository.
2. Copy the generated screenshots repo files into your screenshots repository.
3. Copy the generated social repo files into your social repository.
4. Add the required GitHub Actions secrets from [docs/secrets-and-permissions.md](/Users/glennsorrentino/Library/Mobile%20Documents/com~apple~CloudDocs/Git/project-heartbeat/docs/secrets-and-permissions.md).
5. Run each workflow with `dry_run=true` before enabling schedules.

## Runtime model

- Project Heartbeat handles setup and package generation.
- GitHub Actions handles recurring automation.
- LinkedIn support in MVP is artifact generation first, not full autonomous posting.

