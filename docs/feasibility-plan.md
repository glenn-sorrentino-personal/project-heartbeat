# Project Heartbeat Feasibility Plan

## Summary

Project Heartbeat is feasible as a setup and orchestration product for GitHub-centered maintenance work, with one important constraint:

- A GitHub Pages frontend can handle onboarding, configuration editing, repo selection, and ZIP generation.
- The long-running "agents" should execute inside the user's GitHub repositories through GitHub Actions and config files, not in the browser.
- A fully frontend-only product is realistic for the setup experience, but not for secure ongoing automation unless the automation is delegated to GitHub-native workflows.

## Problem Statement

Project Heartbeat aims to reduce repetitive software maintenance work by standardizing a small set of automation agents across a user's repositories:

- Daily Issue Agent
- Dependabot-bot
- Screenshot Agent
- Social Agent

The product value is that it gives each project a repeatable maintenance baseline and removes recurring human busy work around backlog upkeep, screenshots, and social distribution.

## Proposed MVP

### User experience

1. User opens a static web app hosted on GitHub Pages.
2. User authenticates with GitHub or provides a GitHub token if OAuth is not feasible in a static-only deployment.
3. User selects three repositories:
   - App repo
   - Screenshots repo
   - Social repo
4. User configures social settings for MVP:
   - LinkedIn credentials only
5. User downloads a ZIP containing:
   - Recommended folder structure
   - Agent config files
   - GitHub Actions workflow files
   - Sample templates and documentation

### MVP agent scope

- Daily Issue Agent
  - Creates or validates a GitHub Project board
  - Ensures an `Agent Eligible` column or equivalent field exists
  - Creates scheduled maintenance issues based on repo state
- Dependabot-bot
  - Standardizes Dependabot configuration
  - Optionally adds triage labels, auto-assignment rules, or review guidance
- Screenshot Agent
  - Runs on schedule or on demand
  - Produces screenshots from the app repo and publishes assets to the screenshots repo
- Social Agent
  - Consumes approved screenshots/content inputs
  - Prepares LinkedIn-ready post artifacts
  - MVP should stop short of fully automatic posting unless credential handling is solved safely

## Feasibility Assessment

### What is feasible in a frontend-only app

- Collecting user choices and configuration
- Validating config shape locally
- Generating a ZIP download with templates and workflow files
- Writing setup instructions
- Potentially calling GitHub APIs directly from the browser if the user provides a token

### What is not realistically frontend-only

- Secure storage of long-lived secrets such as LinkedIn credentials
- Reliable scheduled automation from the browser
- GitHub App private key handling
- Fully trusted cross-repo background tasks without GitHub Actions or another execution environment

### Recommended architecture

- GitHub Pages hosts the onboarding/configuration app
- The app generates repo-local automation files
- GitHub Actions performs the scheduled and event-driven work in the user's repos
- Sensitive credentials are stored as GitHub Actions secrets in the relevant repos

This keeps the hosted product simple while making the automation durable.

## Key Product Decisions

### 1. Execution model

Recommendation: treat Project Heartbeat as a generator and control plane, not as the runtime for the agents.

Implication:

- The frontend creates or updates config
- GitHub Actions runs the agents
- Agent logic can live in reusable actions, scripts, or workflow templates

### 2. GitHub authentication

Recommendation: design for two paths, with the simpler one prioritized first.

- Preferred MVP path: user provides a fine-grained GitHub token locally in the browser session
- Later path: add a proper auth backend if OAuth or GitHub App setup becomes necessary

Reason:

- Static hosting is a poor fit for secret-bearing auth flows
- A token-based MVP is simpler and keeps the first version shippable

### 3. LinkedIn integration

Recommendation: keep LinkedIn support limited in MVP.

- Allow config capture and workflow preparation
- Avoid promising secure fully automatic posting from a static-only product
- Consider "generate content package for manual approval/posting" as the safest MVP behavior

Reason:

- Credential handling and third-party API constraints are likely the highest-risk part of the product

## Technical Architecture

### Frontend app

Responsibilities:

- Repo selection
- Config forms
- Template generation
- ZIP export
- Setup validation
- Documentation links

Candidate output files:

- `.github/workflows/heartbeat-daily.yml`
- `.github/workflows/heartbeat-screenshots.yml`
- `.github/workflows/heartbeat-social.yml`
- `heartbeat.config.json`
- `dependabot.yml`
- `docs/project-heartbeat/README.md`

### Agent runtime

Responsibilities:

- Scheduled jobs
- GitHub API mutations
- Project board maintenance
- Screenshot generation
- Social artifact generation

Candidate implementation choices:

- Reusable GitHub Actions workflows
- JavaScript/TypeScript scripts stored in the target repos
- A shared action or template repository for versioned agent logic

## Dependencies and Constraints

### External dependencies

- GitHub API access
- GitHub Actions
- LinkedIn API or a manual-posting fallback
- Browser ZIP generation library

### Product constraints

- Must feel lightweight and self-serve
- Should not require dedicated hosted infrastructure for MVP if avoidable
- Should support multiple repos with clear ownership boundaries

## Major Risks

### High risk

- Secure auth and secret handling in a static-only architecture
- LinkedIn posting automation and credential management
- Cross-repo coordination without confusing setup

### Medium risk

- GitHub Projects API complexity and field/column setup differences
- Screenshot reproducibility across app stacks
- Ongoing maintenance burden if agent logic is duplicated per repo

### Low risk

- ZIP generation
- Config templating
- Static onboarding UI

## Recommended MVP Boundaries

Ship in MVP:

- Static onboarding app
- Repo selection for app/screenshots/social
- Config ZIP export
- Daily Issue Agent bootstrap
- Dependabot config generation
- Screenshot workflow scaffolding
- LinkedIn config capture with manual or semi-manual publishing flow

Do not promise in MVP:

- Fully autonomous social publishing from a pure frontend product
- Rich dashboard analytics
- Broad social network support beyond LinkedIn
- Deep project management automation beyond the initial project field setup and issue generation

## Implementation Phases

### Phase 1: Feasibility spike

- Validate GitHub API calls needed for repo selection and project setup
- Confirm a token-based static onboarding flow
- Prototype ZIP generation with sample config files
- Define the output folder structure

### Phase 2: MVP generator

- Build the GitHub Pages frontend
- Add forms for repo mapping and LinkedIn config
- Generate workflows, config, and docs
- Document install/setup steps

### Phase 3: Agent runtime

- Implement Daily Issue Agent workflow
- Implement standardized Dependabot configuration
- Implement Screenshot Agent workflow scaffolding
- Implement Social Agent artifact generation

### Phase 4: Hardening

- Add validation and dry-run checks
- Improve setup diagnostics
- Introduce versioning for generated templates
- Evaluate whether a minimal backend is justified for auth or social posting

## Success Criteria

- A user can configure the product from a static frontend
- A user can map three repos and download a usable ZIP package
- Generated files can be added to the target repos with minimal manual editing
- GitHub Actions can run the daily maintenance workflow successfully
- The social workflow produces usable LinkedIn-ready output even if final posting remains manual

## Recommendation

Proceed with the project.

The strongest version of the MVP is not "all automation runs in the frontend." The strongest version is:

- GitHub Pages frontend for setup
- Generated config plus workflow files
- GitHub Actions as the execution layer

That version is feasible, lightweight, and aligned with the product goal of giving each project a maintenance lifeline without introducing a large hosted backend.

## Issue Conversion Notes

When this plan is converted into issues, organize them into these tracks:

- Product and UX
- GitHub auth and repo setup
- Config and ZIP generation
- Daily Issue Agent
- Dependabot standardization
- Screenshot Agent
- Social Agent
- Docs and onboarding
