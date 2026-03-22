# Issue 04: Generate ZIP package with workflows, config, and docs

## Summary

Generate a downloadable ZIP package containing the recommended project structure, workflow files, config files, and setup documentation.

## Why this matters

ZIP export is the MVP's core delivery mechanism. Without it, the frontend is only a form and not a usable setup product.

## Scope

- Generate workflow templates for each supported agent
- Generate config files based on user input
- Include setup docs and examples in the output
- Package generated files into a browser-downloadable ZIP
- Ensure output reflects the selected repositories and enabled features

## Out of scope

- Executing workflows
- Validating third-party credentials against external APIs

## Deliverables

- ZIP generation logic
- Template mapping from UI state to generated files
- Downloadable sample output package

## Acceptance criteria

- A user can download a ZIP from the browser
- The ZIP includes config, workflows, and setup docs
- Generated content reflects the user's repo mappings and chosen settings
- Output file names and structure match the schema defined in 01
- The ZIP is usable without manual reconstruction of missing files

## Dependencies

- 01
- 02
- 03

## Suggested labels

- `mvp`
- `generator`
- `frontend`

## Priority

P0
