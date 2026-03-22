# Issue 07: Implement Screenshot Agent workflow scaffolding

## Summary

Create the Screenshot Agent workflow scaffolding so the generated package can produce screenshots from the app repo and publish them to the screenshots repo.

## Why this matters

Screenshots are one of the explicit busy-work targets for Project Heartbeat, but they carry technical variability. MVP should establish a clean scaffold and contract rather than overfit to every app stack.

## Scope

- Define screenshot workflow triggers
- Define how the app repo is built or previewed for capture
- Define screenshot output paths and naming conventions
- Define how artifacts are committed or published to the screenshots repo
- Document required secrets, tokens, and environment variables

## Out of scope

- Universal support for every frontend framework
- Pixel-perfect screenshot behavior across all app stacks

## Deliverables

- Screenshot workflow template
- Screenshot config contract
- Documentation for supported assumptions and setup steps

## Acceptance criteria

- The ZIP package includes a screenshot workflow scaffold
- The workflow defines where screenshots come from and where they are published
- Repo coordination between app and screenshots repos is documented
- Required secrets and runtime assumptions are explicit
- The workflow is usable as a starting point without reverse-engineering missing behavior

## Dependencies

- 01
- 04

## Suggested labels

- `mvp`
- `agent`
- `screenshots`

## Priority

P1
