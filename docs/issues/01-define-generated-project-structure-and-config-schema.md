# Issue 01: Define generated project structure and config schema

## Summary

Define the file layout and configuration schema that Project Heartbeat will generate for users.

## Why this matters

Every later issue depends on a stable contract for what the frontend produces and what the GitHub Actions workflows consume.

## Scope

- Define the recommended folder and file structure for generated output
- Define `heartbeat.config.json` or equivalent config shape
- Define repo mapping fields for:
  - App repo
  - Screenshots repo
  - Social repo
- Define agent-level settings for:
  - Daily Issue Agent
  - Dependabot
  - Screenshot Agent
  - Social Agent
- Define secrets and environment variable requirements
- Decide which generated files belong in which target repos

## Out of scope

- Building the frontend
- Implementing workflows
- GitHub API integration

## Deliverables

- A config schema document
- Example generated directory tree
- Example config file
- A list of required GitHub Actions secrets and variables

## Acceptance criteria

- There is a documented output contract for all generated files
- Repo ownership boundaries are explicit
- Required config fields for the MVP are defined
- Required secrets for screenshot and social flows are documented
- The schema is detailed enough to unblock frontend form work and workflow implementation

## Dependencies

- None

## Suggested labels

- `mvp`
- `planning`
- `generator`

## Priority

P0
