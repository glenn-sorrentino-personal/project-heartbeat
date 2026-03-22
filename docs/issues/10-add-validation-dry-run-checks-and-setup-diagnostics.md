# Issue 10: Add validation, dry-run checks, and setup diagnostics

## Summary

Add MVP validation and diagnostics so users can catch configuration mistakes before committing generated files and can debug setup failures after installation.

## Why this matters

The product spans multiple repos, tokens, secrets, and workflow assumptions. Diagnostics materially reduce support burden and failed first-run experiences.

## Scope

- Validate required form inputs before ZIP generation
- Add schema validation for generated config
- Add dry-run or validation modes for generated workflows where practical
- Add setup diagnostics documentation and visible warnings in the UI
- Identify likely failure points around permissions, missing secrets, and repo mapping errors

## Out of scope

- Advanced analytics dashboards
- Hosted observability

## Deliverables

- Frontend validation rules
- Config validation behavior
- Dry-run guidance or workflow mode definitions
- Diagnostic messaging for common setup failures

## Acceptance criteria

- The app blocks incomplete or invalid config before export
- Generated config can be validated against a defined schema
- The MVP has a documented dry-run or equivalent preflight path where practical
- The UI and docs call out missing permissions, secrets, and repo mapping problems clearly

## Dependencies

- 01
- 03
- 04
- 05
- 07
- 08

## Suggested labels

- `mvp`
- `validation`
- `ux`

## Priority

P1
