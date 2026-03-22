# Issue 03: Add GitHub token flow and repository selection

## Summary

Implement the MVP GitHub access path using a user-provided fine-grained token and allow the user to select the three target repositories.

## Why this matters

The onboarding app cannot generate useful output until it knows which repos it is configuring. A token-based flow is the simplest static-compatible MVP approach.

## Scope

- Add token entry UX with clear local-session handling
- Call GitHub APIs from the browser to list accessible repositories
- Allow the user to map:
  - App repo
  - Screenshots repo
  - Social repo
- Validate that all three selections are made
- Document minimum token permissions required for MVP

## Out of scope

- GitHub App auth
- OAuth backend
- Persistent hosted secret storage

## Deliverables

- Token input flow
- Repo search/selection UI
- Permission requirements documentation

## Acceptance criteria

- A user can provide a GitHub token in the browser session
- The app can list eligible repositories from GitHub
- The user can assign distinct repos to app, screenshots, and social roles
- The app blocks progress if required repo mappings are missing
- The token is not persisted to hosted backend storage

## Dependencies

- 01
- 02

## Suggested labels

- `mvp`
- `frontend`
- `github`

## Priority

P0
