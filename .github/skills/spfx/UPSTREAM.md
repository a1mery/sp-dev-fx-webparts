# Upstream source

This folder is an **unmodified copy** of the `spfx` skill from
https://github.com/SharePoint/spfx-dev-skills (`plugins/spfx/skills/spfx/`),
commit `31010d241bd84821d32ebfa50eda1fe81a6f0b86` (2026-09-02). MIT License, see `LICENSE`.

Do not edit files in this folder. Put sample-repo-specific rules and overrides in
`.github/skills/spfx-sample-upgrade/`, so this folder can be refreshed from upstream at any time:

```
cp -r <spfx-dev-skills>/plugins/spfx/skills/spfx/* .github/skills/spfx/
```

Then update the commit hash above.
