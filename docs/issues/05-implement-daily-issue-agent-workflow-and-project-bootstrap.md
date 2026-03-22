# Issue 05: Implement Daily Issue Agent workflow and project bootstrap

## Summary

Implement the Daily Issue Agent so generated workflows can bootstrap a GitHub Project and create scheduled maintenance issues.

## Why this matters

This is the most distinctive automation in the MVP. It proves that Project Heartbeat gives a project a maintenance baseline instead of only generating templates.

## Scope

- Create the workflow template for the Daily Issue Agent
- Implement project bootstrap behavior
- Ensure the workflow can create or validate an `Agent Eligible` field, column, or equivalent project metadata
- Define the scheduled run behavior
- Define issue generation rules for MVP
- Document required GitHub permissions

## Out of scope

- Deep project management logic beyond initial setup and recurring issue creation
- Complex prioritization or analytics

## Deliverables

- Workflow template
- Agent script or action logic
- Example config for issue generation
- Documentation for required permissions and setup

## Acceptance criteria

- Generated output includes a runnable Daily Issue Agent workflow
- The workflow can create or validate the target project structure
- The workflow can create scheduled maintenance issues based on config
- The MVP behavior is deterministic and documented
- Setup instructions explain any required repo or org permissions

## Dependencies

- 01
- 04

## Suggested labels

- `mvp`
- `agent`
- `github-projects`

## Priority

P0
