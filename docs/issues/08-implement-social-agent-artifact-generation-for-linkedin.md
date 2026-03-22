# Issue 08: Implement Social Agent artifact generation for LinkedIn

## Summary

Implement the Social Agent for MVP as a LinkedIn-focused artifact generator, not a fully autonomous social publishing bot.

## Why this matters

This preserves the product value while avoiding the highest-risk part of the plan: secure long-lived credential handling in a static-only architecture.

## Scope

- Add LinkedIn-specific config fields to the generator
- Define the Social Agent workflow template
- Generate post-ready artifacts from approved content and screenshots
- Define a manual or semi-manual publishing handoff
- Document secrets and approval points if partial automation is supported

## Out of scope

- Full autonomous posting from the frontend
- Multi-network support beyond LinkedIn
- Rich editorial calendars or analytics

## Deliverables

- Social workflow template
- LinkedIn config contract
- Artifact format for post text, media references, and approval handoff
- Documentation for manual publishing flow

## Acceptance criteria

- The ZIP package includes a Social Agent workflow scaffold
- LinkedIn configuration fields are represented in generated config
- The workflow can produce LinkedIn-ready output artifacts
- The MVP does not require insecure hosted credential storage
- Documentation clearly states whether posting is manual or semi-manual

## Dependencies

- 01
- 04
- 07

## Suggested labels

- `mvp`
- `agent`
- `social`

## Priority

P1
