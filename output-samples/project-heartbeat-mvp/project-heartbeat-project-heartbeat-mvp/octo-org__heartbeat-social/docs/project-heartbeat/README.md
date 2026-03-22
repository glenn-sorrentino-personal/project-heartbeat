# Project Heartbeat Setup

## What this package contains

- Repo-scoped `heartbeat.config.json`
- GitHub Actions workflows
- GitHub helper scripts
- Dependabot config
- Troubleshooting and setup notes

## Required GitHub Actions secrets

- `GH_HEARTBEAT_TOKEN`
- `GH_SCREENSHOTS_TOKEN`
- `LINKEDIN_CLIENT_ID`
- `LINKEDIN_CLIENT_SECRET`
- `LINKEDIN_REFRESH_TOKEN`

## Setup checklist

1. Copy each repo folder into the matching repository.
2. Add secrets in repository settings.
3. Review workflow cron schedules, capture commands, and branch names.
4. Run each workflow manually with `dry_run=true`.
5. Enable scheduled execution after dry-run passes.

## Generated on

2026-03-22
