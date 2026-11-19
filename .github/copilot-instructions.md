# Repository instructions for Copilot

## Context
This repository is a fork of `pnp/sp-dev-fx-webparts`, the community gallery of SharePoint Framework
(SPFx) web part samples. Every folder under `samples/` is an **independent SPFx project** with its own
`package.json`, dependencies and build. Nothing at the root builds the samples.

## Hard rules
- **One task = one sample.** Only modify files inside the `samples/<folder>` named in the issue.
  Never modify other samples, root files or anything under `.github/`.
- Never commit build output or generated files: `*.sppkg`, `lib/`, `temp/`, `dist/`, `release/`,
  `node_modules/`, `upgrade-report.md`.
- Never add secrets, tenant URLs or credentials to any file.
- Write code comments, commit messages and PR descriptions in English.

## SPFx upgrade tasks
For any issue titled `[Upgrade] <folder> → SPFx <version>`, use the **`spfx-sample-upgrade`** skill
(`.github/skills/spfx-sample-upgrade/`). It defines the scope, the steps, the definition of done and the
PR format. It relies on the generic `spfx` skill for the upgrade mechanics, but **its scope rules take
precedence** (in particular: no PnPjs migration, no UI redesign).

## Definition of done (all tasks)
- `npm install` and `npm run build` succeed in the sample folder.
- The PR description contains `Closes #<issue>`.
- If done can't be reached, leave the PR as **draft** and explain the blocker. Don't hide problems
  with `@ts-ignore`, disabled lint rules or removed code.
