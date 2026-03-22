# Issue 09: Write setup and onboarding documentation

## Summary

Write the setup documentation that explains how users move from the generated ZIP package to a working Project Heartbeat installation.

## Why this matters

This MVP depends on users applying generated files across multiple repositories. Without explicit docs, setup friction will be high and the product will look incomplete.

## Scope

- Write install instructions for the app, screenshots, and social repos
- Document where generated files should be placed
- Document required GitHub secrets and variables
- Document GitHub Pages deployment for the frontend
- Add troubleshooting for common setup mistakes

## Out of scope

- Hosted support tooling
- Video walkthroughs

## Deliverables

- Setup guide
- Secret and permissions checklist
- Repo placement guide
- Troubleshooting section

## Acceptance criteria

- A new user can follow the docs from ZIP download to initial setup
- Required secrets, repo mappings, and workflow expectations are documented
- The docs explain the split between static frontend setup and GitHub Actions execution
- Common failure modes have documented fixes or diagnostics

## Dependencies

- 04
- 05
- 06
- 07
- 08

## Suggested labels

- `mvp`
- `docs`
- `onboarding`

## Priority

P1
