# Security Policy

TAMU is a static heritage site rendered with TanStack Start: it serves content from this repository
and ships no accounts, payments or user database. Even so, vulnerabilities in the code, the build
pipeline or its dependencies are taken seriously.

## Supported versions

Only the current `main` branch is supported. Fixes land on `main`; older commits and forks are not
maintained.

## Reporting a vulnerability

**Do not open a public issue, pull request or discussion for a security problem.** A public report
tells everyone about the weakness before it can be fixed.

Use GitHub's private reporting instead:

1. Open the **Security** tab of this repository.
2. Choose **Report a vulnerability**.
3. Describe the issue in the advisory form.

If private reporting is unavailable, email **hello@tamu.one** with the subject
`TAMU security`. Encrypt nothing sensitive in the first message — say what you found and a
maintainer will arrange a safer channel.

Please include:

- what the problem is and where it lives (file, route or dependency);
- steps to reproduce it, or a minimal proof of concept;
- the impact you believe it has;
- any fix or mitigation you have in mind, if you have one.

## What to expect

- Acknowledgement within **5 working days**.
- An assessment of severity and a plan for the fix, or a clear explanation of why it is not a
  vulnerability.
- Credit in the advisory and the release notes once a fix ships, unless you ask to stay anonymous.

Please give the maintainers a reasonable window to release a fix before publishing details.

## Scope

In scope:

- code in this repository (routing, rendering, server entry, scripts, build and CI configuration);
- leaked secrets, tokens or personal data committed to the repository;
- dependency vulnerabilities that are actually reachable through this application.

Out of scope:

- content corrections, factual disputes, typos and broken links — these are normal issues
  (see [CONTRIBUTING.md](CONTRIBUTING.md));
- vulnerabilities in third-party services or upstream dependencies with no impact here — report
  those upstream;
- automated scanner output with no demonstrated impact;
- social engineering, physical access, spam and volumetric denial-of-service reports.
