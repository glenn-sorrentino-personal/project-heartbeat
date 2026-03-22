# Issue 02: Build static onboarding app shell for GitHub Pages

## Summary

Create the static frontend shell that will host the Project Heartbeat onboarding flow on GitHub Pages.

## Why this matters

The frontend is the control plane for the MVP. It must exist before repo selection, config editing, and ZIP generation can be wired together.

## Scope

- Choose the frontend stack and static hosting approach
- Build the app shell and layout
- Create navigation or step flow for setup
- Add placeholders for:
  - GitHub auth/token entry
  - Repo selection
  - Agent configuration
  - ZIP export
- Ensure the app can be built and deployed as static assets

## Out of scope

- Real GitHub API calls
- ZIP generation logic
- Full validation rules

## Deliverables

- A deployable static app shell
- Initial onboarding flow structure
- Placeholder screens for each MVP setup step

## Acceptance criteria

- The app runs as a static site
- The setup flow has clear steps for auth, repo mapping, social config, and export
- The project can be deployed to GitHub Pages without a backend
- The UI is usable on desktop and mobile

## Dependencies

- 01

## Suggested labels

- `mvp`
- `frontend`
- `github-pages`

## Priority

P0
