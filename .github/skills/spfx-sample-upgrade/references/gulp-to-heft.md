# Migrate from the Gulp-Based to the Heft-Based Toolchain

SPFx v1.22 introduced a new Heft-based build toolchain, replacing the Gulp-based toolchain used in SPFx v1.0–v1.21.1. This article explains what changes during the migration and how to perform it.

> **Important**
>
> This article covers the Gulp-to-Heft transition to SPFx 1.22.2, not a direct upgrade to SPFx 1.24. Save a known-good version first. Review changes to dependencies, configuration, lint rules, and scripts against a project generated for the target version. A separate manual migration walkthrough targets SPFx 1.22.1.

> **Tip**
>
> The CLI for Microsoft 365 `spfx project upgrade` command generates an upgrade report; it doesn't change project files. Check that your installed CLI supports the requested target version. Review and apply the reported changes, including project-specific configuration that automation can't assess. See the [SPFx 1.22.2 release notes](https://learn.microsoft.com/sharepoint/dev/spfx/release-1.22.2).

> **Note**
>
> The CLI for Microsoft 365 is an open-source solution with an active community providing support. Microsoft does not provide an SLA for support of this open-source tool.

## What Changes in This Migration

The following areas of your project are affected when migrating from the Gulp-based toolchain to the Heft-based toolchain.

### Build Toolchain Packages

The Gulp-based packages (`@microsoft/sp-build-web`, `ajv`, `gulp`, and `@microsoft/rush-stack-compiler-*`) are removed and replaced with Heft-based equivalents (`@microsoft/spfx-web-build-rig`, `@microsoft/spfx-heft-plugins`, `@rushstack/heft`, `@typescript-eslint/parser`, and `@types/heft-jest`).

### TypeScript Configuration

The existing `tsconfig.json` with its full `compilerOptions` block is replaced with a minimal file that extends the SPFx build rig's base TypeScript configuration. A new `config/typescript.json` file is added to configure static asset copying for the Heft TypeScript plugin.

### Build Scripts

The scripts change from Gulp commands (`gulp bundle`, `gulp clean`, `gulp test`) to Heft commands (`heft build`, `heft clean`, `heft start`).

### ESLint Rules

Two ESLint rules move from the `@microsoft/spfx/` namespace to the `@rushstack/` namespace:

- `import-requires-chunk-name`
- `pair-react-dom-render-unmount`

### Configuration Files

A new `config/rig.json` file is added to point the project at the `@microsoft/spfx-web-build-rig` shared configuration package. The existing `config/sass.json` is updated to use the Heft SASS plugin schema and extend the rig's default SASS configuration.

### Removed Files

The `gulpfile.js` and `src/index.ts` files are removed because they're no longer needed by the Heft-based build system.

### Production Dependencies

All `@microsoft/sp-*` packages in `dependencies` are updated to the target SPFx version.

## How to Do the Migration

Run the following command from the root of your project to generate a complete upgrade report:

```console
npx -p @pnp/cli-microsoft365@latest m365 spfx project upgrade --toVersion 1.22.2 --output md
```

## Verify the Migration

After applying the changes, verify the migration by running the build command:

```console
npm run build
```