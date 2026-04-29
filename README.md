# Power Palette Studio

A SharePoint Framework (SPFx) web part that lets you generate, customize, and preview color palettes for Power Apps themes — all within SharePoint.

## Summary

Power Palette Studio is a developer tool for building Power Apps color themes. Choose colors, tweak them with an HSL picker, and instantly see how they look applied to a realistic dashboard — both in desktop and mobile view. When you're happy with your palette, copy the ready-to-paste Power Apps `ColorValue` formula with one click.

**Key capabilities:**

- Generate harmonious 7-color palettes (Primary, Secondary, Accent, Success, Warning, Error, Info)
- Fine-tune any color with an interactive HSL picker (hue, saturation, lightness sliders)
- Live dashboard preview — toggle between desktop browser and mobile phone views
- Copy hex values per color or export the full Power Apps theme formula
- Responsive layout that adapts to SharePoint column widths
- Supports SharePoint light and dark themes via Fluent UI v9

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/SPFx-1.21.1-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Power Apps](https://learn.microsoft.com/en-us/power-apps/)

## Prerequisites

- Node.js `>=22.14.0 < 23.0.0`
- A Microsoft 365 tenant with SharePoint Online

## Solution

| Solution             | Author        |
| -------------------- | ------------- |
| power-palette-studio | Sandeep-FED   |

## Version history

| Version | Date          | Comments        |
| ------- | ------------- | --------------- |
| 1.0.0   | April 2026    | Initial release |

## Minimal Path to Awesome

```bash
# Clone the repository
git clone <repo-url>
cd power-palette-studio

# Install dependencies
npm install

# Start the local workbench
gulp serve
```

Open `https://<your-tenant>.sharepoint.com/sites/<site>/_layouts/15/workbench.aspx` and add the **Power Palette Studio** web part to the canvas.

## Features

### Color Palette

- **Generate** — one click produces a random harmonious palette using HSL-based color theory
- **Color Picker** — click any swatch to open an HSL picker (color area + hue/saturation sliders powered by Fluent UI v9)
- **Copy hex** — click the hex value below any swatch to copy it to the clipboard

### Live Preview

- **Desktop view** — a scaled browser-chrome mockup showing a sidebar navigation, stat cards, and an activity list, all themed with your palette colors
- **Mobile view** — a phone frame mockup with a stacked layout and bottom navigation bar
- The preview auto-switches to mobile when the available column width is too narrow for the desktop layout

### Export

- **Copy code** — generates a ready-to-use Power Apps `ColorValue()` theme formula and opens it in a dialog for copying

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Framework    | SharePoint Framework (SPFx) 1.21.1              |
| UI           | React 17, Fluent UI v9 (`@fluentui/react-components`) |
| Icons        | `@fluentui/react-icons`                         |
| Theming      | `@fluentui/react-migration-v8-v9` (`createV9Theme`) |
| Styling      | Fluent UI `makeStyles` (Griffel CSS-in-JS)      |
| Build        | Gulp, TypeScript 5.3                            |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
