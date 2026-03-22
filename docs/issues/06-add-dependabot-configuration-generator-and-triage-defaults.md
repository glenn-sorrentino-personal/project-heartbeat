# Issue 06: Add Dependabot configuration generator and triage defaults

## Summary

Generate a standardized Dependabot configuration and optional default triage behavior as part of the MVP package.

## Why this matters

Dependabot maintenance is repetitive, high-frequency work. Standardizing its baseline configuration is low-risk and high-value for early adopters.

## Scope

- Generate `dependabot.yml` for supported ecosystems
- Define default update cadence and grouping rules for MVP
- Define optional labels or triage defaults for generated pull requests
- Document any assumptions or manual follow-up required

## Out of scope

- Advanced auto-merge logic
- Custom policies for every language ecosystem

## Deliverables

- Dependabot template
- Config options included in the generator
- Documentation for supported ecosystems and defaults

## Acceptance criteria

- The ZIP package includes a valid Dependabot config when enabled
- The MVP documents what ecosystems are supported
- Default cadence and grouping behavior are explicit
- Any label or triage assumptions are documented

## Dependencies

- 01
- 04

## Suggested labels

- `mvp`
- `dependabot`
- `generator`

## Priority

P1
