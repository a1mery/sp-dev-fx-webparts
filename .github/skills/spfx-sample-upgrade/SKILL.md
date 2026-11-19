---
name: spfx-sample-upgrade
description: 'Upgrade ONE PnP SPFx web part sample in this repository (a folder under samples/) to a target SPFx version, including the gulp to Heft migration. Use for issues titled "[Upgrade] {folder} → SPFx {version}". Wraps the generic spfx skill with the rules of this sample repository; its rules take precedence over the spfx skill.'
---

# Upgrade a PnP SPFx sample

This skill drives the upgrade of a single sample. It uses the generic `spfx` skill
(`.github/skills/spfx/`) for the upgrade mechanics, and adds the rules specific to this repository.
**When the two disagree, this skill wins.**

## Inputs (from the issue)

- **Sample folder**: the folder under `samples/`. All work happens in `samples/<Sample folder>`.
- **Current SPFx version** and **Target SPFx version**: the target is always an exact version. Never upgrade to anything else.
- **Uses Microsoft Graph**: whether the sample declares Graph permission requests.

## Scope rules (override the spfx skill)

The goal is a **like-for-like upgrade**: same features, same behavior, newer SPFx.

- Only modify files inside `samples/<Sample folder>`. Never touch other samples, the repo root or `.github/`.
- **Do NOT apply the spfx skill's "PnPjs by default" global rule.** Keep the sample's existing data access code (SPHttpClient, MSGraphClient, PnPjs version…) unless the upgrade report or the build requires a change.
- **Do NOT load or apply `react-design.md`.** No UI redesign, no Fluent UI v8 → v9 migration, no restyling.
- Do not refactor, rename or "improve" code. Change only what the upgrade report, the toolchain migration or a build error requires.
- Do not add, remove or broaden `webApiPermissionRequests` in `config/package-solution.json` unless the build requires it. If you change them, say so explicitly in the PR description.
- Do not bump the solution version in `config/package-solution.json`.

## Steps

### 1. Prepare
1. Work in `samples/<Sample folder>`.
2. Detect the current version from `package.json` (`@microsoft/sp-core-library`) and `.yo-rc.json`. If it differs from the issue's "Current SPFx version", trust the files and mention it in the PR.
3. Do **not** run `npm install` before the upgrade: old samples often fail to install on the current Node version, and the upgrade report doesn't need installed dependencies.

### 2. Generate and apply the upgrade report
1. Run the report and write it **outside** the sample folder (this repo rejects committed upgrade reports):
   ```
   m365 spfx project upgrade --toVersion <Target SPFx version> --output md > /tmp/upgrade-report.md
   ```
2. Apply **all** steps of the report, in order, following `.github/skills/spfx/references/upgrade.md` ("Apply the upgrade").
3. If a step targets a file the sample customized, merge it. Never overwrite custom logic.

### 3a. Toolchain (gulp → Heft)
The toolchain depends on the target version (see `.github/skills/spfx/SKILL.md`, "Toolchain decision rule"):
- Target **≥ 1.22.0**: the sample must end up on **Heft**.
- After applying the report, check: if `gulpfile.js` still exists, or no `@rushstack/heft*` package is in `package.json`, the migration isn't done. Complete it by following `references/gulp-to-heft.md`.
- If `gulpfile.js` contained custom tasks or webpack customizations, port them to the Heft configuration. If you can't, list them in the PR under "Not migrated".

### 3b. React 17 → 18 (target ≥ 1.24)
- Rendering: replace `ReactDom.render(element, this.domElement)` with
  `createRoot` from `react-dom/client`. Keep the root in a private field,
  create it once, call `root.render(element)` in `render()`, and
  `root.unmount()` in `onDispose()` (replaces `unmountComponentAtNode`).
- Types: `React.FC` / `React.Component` no longer add `children` implicitly.
  Add `children?: React.ReactNode` to props interfaces that use it.
- Third-party React libraries (`@pnp/spfx-controls-react`,
  `@pnp/spfx-property-controls`, Fluent UI, others): upgrade each to a
  version that supports React 18 and SPFx 1.24. If none exists, stop and
  leave the PR as draft with the library name.
- Do not use new React 18 features. Behavior must stay identical.
- List every React-related change in the PR under "Build fixes".

### 4. Install and build
1. Use the Node version required by the target SPFx version (the agent environment provides it).
2. `npm install --no-fund --no-audit` (run synchronously, allow at least 5 minutes).
3. `npm run build`. For Heft samples in this repo, this script runs the production build **and** `package-solution`.
4. The upgrade is done only when:
   - `npm run build` exits with code 0, and
   - a `.sppkg` file exists in `sharepoint/solution/`.
5. Fix build errors with the **smallest** change that works: deprecated or removed APIs, type errors from the newer TypeScript, changed imports. Keep a list of every fix for the PR.

### 5. Sample hygiene (required by this repository)
Update these files to match the target version:
- **`.nvmrc`**: the Node version used for the target (e.g. `22.14.0`).
- **`README.md`**:
  - "Compatibility" section: update the SPFx badge (`SPFx-<version>`), the Node.js badge and the toolchain badge (`Toolchain-Heft`). Keep the other badges.
  - "Version history" table: add a row with the next version number, today's date (e.g. `Nov 17, 2026`) and `Upgraded to SPFx <version>`.
- **`assets/sample.json`**: set the `SPFX-VERSION` metadata value to the target version, and `updateDateTime` to today (`YYYY-MM-DD`).
- **`.devcontainer/devcontainer.json`** (if present): update the `name` and the `m365pnp/spfx:<version>` image tag to the target version.
- Never commit: `upgrade-report.md`, `*.sppkg`, `lib/`, `temp/`, `dist/`, `node_modules/`, `release/`.
- `package-lock.json`: commit it only if the sample already had one.

### 6. Pull request
Open the PR with `Closes #<issue>` and these sections:

```
## Summary
<sample> upgraded from SPFx <current> to <target> (toolchain: gulp → Heft | Heft).

## Upgrade report steps applied
- ...

## Build fixes
- <file>: <what changed and why>

## Not migrated / skipped
- <item>: <reason>   (or "None")

## Graph permissions
Unchanged | Changed: <details>

## Validation
- npm run build: ✅
- .sppkg produced: ✅ <file name>
```

### If you can't finish
If the build can't be made to pass without changing behavior or broadening scope, stop. Keep the PR as **draft** and describe the blocker precisely: the error, what you tried, and what decision is needed. A clear draft is better than a "green" PR built on hacks: no `// @ts-ignore` and no disabled lint rules just to pass the build.
