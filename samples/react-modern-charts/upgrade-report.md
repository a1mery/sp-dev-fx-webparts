# Upgrade project modern-charts-client-side-solution to v1.24.1

Date: 11/17/2026

## Findings

Following is the list of steps required to upgrade your project to SharePoint Framework version 1.24.1. [Summary](#Summary) of the modifications is included at the end of the report.

### FN001001 @microsoft/sp-core-library | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-core-library

Execute the following command:

```sh
npm i -SE @microsoft/sp-core-library@1.24.1
```

File: [./package.json:10:5](./package.json)

### FN001003 @microsoft/sp-office-ui-fabric-core | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-office-ui-fabric-core

Execute the following command:

```sh
npm i -SE @microsoft/sp-office-ui-fabric-core@1.24.1
```

File: [./package.json:11:5](./package.json)

### FN001004 @microsoft/sp-webpart-base | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-webpart-base

Execute the following command:

```sh
npm i -SE @microsoft/sp-webpart-base@1.24.1
```

File: [./package.json:13:5](./package.json)

### FN001021 @microsoft/sp-property-pane | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-property-pane

Execute the following command:

```sh
npm i -SE @microsoft/sp-property-pane@1.24.1
```

File: [./package.json:12:5](./package.json)

### FN002002 @microsoft/sp-module-interfaces | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-module-interfaces

Execute the following command:

```sh
npm i -DE @microsoft/sp-module-interfaces@1.24.1
```

File: [./package.json:32:5](./package.json)

### FN002022 @microsoft/eslint-plugin-spfx | Required

Install SharePoint Framework dev dependency package @microsoft/eslint-plugin-spfx

Execute the following command:

```sh
npm i -DE @microsoft/eslint-plugin-spfx@1.24.1
```

File: [./package.json:29:3](./package.json)

### FN002023 @microsoft/eslint-config-spfx | Required

Install SharePoint Framework dev dependency package @microsoft/eslint-config-spfx

Execute the following command:

```sh
npm i -DE @microsoft/eslint-config-spfx@1.24.1
```

File: [./package.json:29:3](./package.json)

### FN002030 @microsoft/spfx-web-build-rig | Required

Install SharePoint Framework dev dependency package @microsoft/spfx-web-build-rig

Execute the following command:

```sh
npm i -DE @microsoft/spfx-web-build-rig@1.24.1
```

File: [./package.json:29:3](./package.json)

### FN002034 @microsoft/spfx-heft-plugins | Required

Install SharePoint Framework dev dependency package @microsoft/spfx-heft-plugins

Execute the following command:

```sh
npm i -DE @microsoft/spfx-heft-plugins@1.24.1
```

File: [./package.json:29:3](./package.json)

### FN010001 .yo-rc.json version | Recommended

Update version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.24.1"
  }
}
```

File: [./.yo-rc.json:5:5](./.yo-rc.json)

### FN027004 serialize-javascript | Required

Install SharePoint Framework override dependency package serialize-javascript

Execute the following command:

```sh
npm pkg set overrides.serialize-javascript=^7.1.3
```

File: [./package.json:1:1](./package.json)

### FN001008 react | Required

Upgrade SharePoint Framework dependency package react

Execute the following command:

```sh
npm i -SE react@18.3.1
```

File: [./package.json:22:5](./package.json)

### FN001009 react-dom | Required

Upgrade SharePoint Framework dependency package react-dom

Execute the following command:

```sh
npm i -SE react-dom@18.3.1
```

File: [./package.json:24:5](./package.json)

### FN002015 @types/react | Required

Install SharePoint Framework dev dependency package @types/react

Execute the following command:

```sh
npm i -DE @types/react@18.2.79
```

File: [./package.json:29:3](./package.json)

### FN002016 @types/react-dom | Required

Install SharePoint Framework dev dependency package @types/react-dom

Execute the following command:

```sh
npm i -DE @types/react-dom@18.2.25
```

File: [./package.json:29:3](./package.json)

### FN002031 @rushstack/heft | Required

Install SharePoint Framework dev dependency package @rushstack/heft

Execute the following command:

```sh
npm i -DE @rushstack/heft@1.3.2
```

File: [./package.json:29:3](./package.json)

### FN012021 tsconfig.json watchOptions.excludeDirectories property | Required

Update tsconfig.json watchOptions.excludeDirectories property

```json
{
  "watchOptions": {
    "excludeDirectories": ["**/teams","**/temp/copilot"]
  }
}
```

File: [./tsconfig.json:1:1](./tsconfig.json)

### FN020001 @types/react | Required

Add resolution for package @types/react

```json
{
  "resolutions": {
    "@types/react": "18.2.79"
  }
}
```

File: [./package.json:27:5](./package.json)

### FN021003 package.json engines.node | Required

Update package.json engines.node property

```json
{
  "engines": {
    "node": ">=22.14.0 <23.0.0 || >=24.0.0 <25.0.0 || >=26.0.0 <27.0.0"
  }
}
```

File: [./package.json:7:5](./package.json)

### FN027001 @rushstack/heft | Required

Install SharePoint Framework override dependency package @rushstack/heft

Execute the following command:

```sh
npm pkg set overrides.@rushstack/heft=1.3.2
```

File: [./package.json:1:1](./package.json)

### FN027002 qs | Required

Install SharePoint Framework override dependency package qs

Execute the following command:

```sh
npm pkg set overrides.qs=>=6.15.2
```

File: [./package.json:1:1](./package.json)

### FN027003 uuid | Required

Install SharePoint Framework override dependency package uuid

Execute the following command:

```sh
npm pkg set overrides.uuid=>=11.1.1
```

File: [./package.json:1:1](./package.json)

### FN002025 eslint-plugin-react-hooks | Required

Install SharePoint Framework dev dependency package eslint-plugin-react-hooks

Execute the following command:

```sh
npm i -DE eslint-plugin-react-hooks@5.2.0
```

File: [./package.json:29:3](./package.json)

### FN002024 eslint | Required

Install SharePoint Framework dev dependency package eslint

Execute the following command:

```sh
npm i -DE eslint@9.37.0
```

File: [./package.json:29:3](./package.json)

### FN015016 eslint.config.js | Required

Add file eslint.config.js

Execute the following command:

```sh
@'
const spfxProfile = require('@microsoft/eslint-config-spfx/lib/flat-profiles/react');

module.exports = [
  ...spfxProfile,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      }
    }
  }
];
'@ | Out-File -FilePath "eslint.config.js"
```

File: [eslint.config.js](eslint.config.js)

### FN002036 @types/jest | Required

Install SharePoint Framework dev dependency package @types/jest

Execute the following command:

```sh
npm i -DE @types/jest@30.0.0
```

File: [./package.json:29:3](./package.json)

### FN022002 Scss file import | Optional

Add scss file import

```scss
@import 'pkg:@fluentui/react/dist/sass/References.scss'
```

File: [src/webparts/modernCharts/components/ModernCharts.module.scss](src/webparts/modernCharts/components/ModernCharts.module.scss)

### FN002001 @microsoft/sp-build-web | Required

Remove SharePoint Framework dev dependency package @microsoft/sp-build-web

Execute the following command:

```sh
npm un -D @microsoft/sp-build-web
```

File: [./package.json:31:5](./package.json)

### FN002004 gulp | Required

Remove SharePoint Framework dev dependency package gulp

Execute the following command:

```sh
npm un -D gulp
```

File: [./package.json:38:5](./package.json)

### FN002007 ajv | Required

Remove SharePoint Framework dev dependency package ajv

Execute the following command:

```sh
npm un -D ajv
```

File: [./package.json:37:5](./package.json)

### FN002021 @rushstack/eslint-config | Required

Install SharePoint Framework dev dependency package @rushstack/eslint-config

Execute the following command:

```sh
npm i -DE @rushstack/eslint-config@4.5.2
```

File: [./package.json:29:3](./package.json)

### FN002026 typescript | Required

Install SharePoint Framework dev dependency package typescript

Execute the following command:

```sh
npm i -DE typescript@~5.8.0
```

File: [./package.json:29:3](./package.json)

### FN002032 @typescript-eslint/parser | Required

Install SharePoint Framework dev dependency package @typescript-eslint/parser

Execute the following command:

```sh
npm i -DE @typescript-eslint/parser@8.46.2
```

File: [./package.json:29:3](./package.json)

### FN002033 css-loader | Required

Install SharePoint Framework dev dependency package css-loader

Execute the following command:

```sh
npm i -DE css-loader@7.1.2
```

File: [./package.json:29:3](./package.json)

### FN002035 @types/heft-jest | Required

Install SharePoint Framework dev dependency package @types/heft-jest

Execute the following command:

```sh
npm i -DE @types/heft-jest@1.0.2
```

File: [./package.json:29:3](./package.json)

### FN010011 .yo-rc.json useGulp | Recommended

Update useGulp property in .yo-rc.json

```json
{
    "useGulp": false
}
```

File: [./.yo-rc.json:2:38](./.yo-rc.json)

### FN014003 .vscode/launch.json | Recommended

In the .vscode folder, add the launch.json file

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Hosted workbench",
      "type": "msedge",
      "request": "launch",
      "url": "https://{tenantDomain}/_layouts/workbench.aspx",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///.././src/*": "${webRoot}/src/*",
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "-incognito"
      ]
    }
  ]
}
```

File: [.vscode/launch.json](.vscode/launch.json)

### FN015005 src/index.ts | Required

Remove file src/index.ts

Execute the following command:

```sh
Remove-Item "src/index.ts"
```

File: [src/index.ts](src/index.ts)

### FN015010 gulpfile.js | Required

Remove file gulpfile.js

Execute the following command:

```sh
Remove-Item "gulpfile.js"
```

File: [gulpfile.js](gulpfile.js)

### FN015011 tsconfig.json | Required

Add file tsconfig.json

Execute the following command:

```sh
@'
{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json"
}

'@ | Out-File -FilePath "tsconfig.json"
```

File: [tsconfig.json](tsconfig.json)

### FN015014 config/rig.json | Required

Add file config/rig.json

Execute the following command:

```sh
@'
{
  // The "rig.json" file directs tools to look for their config files in an external package.
  // Documentation for this system: https://www.npmjs.com/package/@rushstack/rig-package
  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",

  "rigPackageName": "@microsoft/spfx-web-build-rig"
}

'@ | Out-File -FilePath "config/rig.json"
```

File: [config/rig.json](config/rig.json)

### FN015015 config/typescript.json | Required

Add file config/typescript.json

Execute the following command:

```sh
@'
{
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/typescript.json",

  "staticAssetsToCopy": {
    "fileExtensions": [".resx", ".jpg", ".png", ".woff", ".eot", ".ttf", ".svg", ".gif"],

    "includeGlobs": ["webparts/*/loc/*.js"]
  }
}

'@ | Out-File -FilePath "config/typescript.json"
```

File: [config/typescript.json](config/typescript.json)

### FN021001 main | Required

Remove package.json property

```json
{
  "main": "undefined"
}
```

File: [./package.json:5:3](./package.json)

### FN021004 package.json scripts.build | Required

Update package.json scripts.build property

```json
{
  "scripts": {
    "build": "heft test --clean --production && heft package-solution --production"
  }
}
```

File: [./package.json:42:5](./package.json)

### FN021005 package.json scripts.test | Required

Remove package.json scripts.test property

```json
{
  "scripts": {
    "test": ""
  }
}
```

File: [./package.json:44:5](./package.json)

### FN021006 package.json scripts.clean | Required

Update package.json scripts.clean property

```json
{
  "scripts": {
    "clean": "heft clean"
  }
}
```

File: [./package.json:43:5](./package.json)

### FN021007 package.json scripts.start | Required

Update package.json scripts.start property

```json
{
  "scripts": {
    "start": "heft start --clean"
  }
}
```

File: [./package.json:41:14](./package.json)

### FN021008 package.json scripts.eject-webpack | Required

Update package.json scripts.eject-webpack property

```json
{
  "scripts": {
    "eject-webpack": "heft eject-webpack"
  }
}
```

File: [./package.json:41:14](./package.json)

### FN002029 @microsoft/rush-stack-compiler-5.3 | Required

Install SharePoint Framework dev dependency package @microsoft/rush-stack-compiler-5.3

Execute the following command:

```sh
npm i -DE @microsoft/rush-stack-compiler-5.3@0.1.0
```

File: [./package.json:29:3](./package.json)

### FN012017 tsconfig.json extends property | Required

Update tsconfig.json extends property

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-5.3/includes/tsconfig-web.json"
}
```

File: [./tsconfig.json:2:3](./tsconfig.json)

### FN010010 .yo-rc.json @microsoft/teams-js SDK version | Recommended

Update @microsoft/teams-js SDK version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/teams-js": "2.24.0"
    }
  }
}
```

File: [./.yo-rc.json:2:3](./.yo-rc.json)

### FN001022 office-ui-fabric-react | Required

Remove SharePoint Framework dependency package office-ui-fabric-react

Execute the following command:

```sh
npm un -S office-ui-fabric-react
```

File: [./package.json:21:5](./package.json)

### FN001035 @fluentui/react | Required

Install SharePoint Framework dependency package @fluentui/react

Execute the following command:

```sh
npm i -SE @fluentui/react@8.106.4
```

File: [./package.json:9:3](./package.json)

### FN007002 serve.json initialPage | Required

Update serve.json initialPage URL

```json
{
  "initialPage": "https://{tenantDomain}/_layouts/workbench.aspx"
}
```

File: [./config/serve.json:4:3](./config/serve.json)

### FN015009 config/sass.json | Required

Add file config/sass.json

Execute the following command:

```sh
@'
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/sass.schema.json"
}
'@ | Out-File -FilePath "config/sass.json"
```

File: [config/sass.json](config/sass.json)

### FN010008 .yo-rc.json nodeVersion | Recommended

Update nodeVersion in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "nodeVersion": "22.14.0"
  }
}
```

File: [./.yo-rc.json:2:38](./.yo-rc.json)

### FN010009 .yo-rc.json @microsoft/microsoft-graph-client SDK version | Recommended

Update @microsoft/microsoft-graph-client SDK version in .yo-rc.json

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/microsoft-graph-client": "3.0.2"
    }
  }
}
```

File: [./.yo-rc.json:2:3](./.yo-rc.json)

### FN022001 Scss file import | Required

Remove scss file import

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

File: [src/webparts/modernCharts/components/ModernCharts.module.scss](src/webparts/modernCharts/components/ModernCharts.module.scss)

### FN012020 tsconfig.json noImplicitAny | Required

Add noImplicitAny in tsconfig.json

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

File: [./tsconfig.json:3:22](./tsconfig.json)

### FN007001 serve.json schema | Required

Update serve.json schema URL

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json"
}
```

File: [./config/serve.json:2:3](./config/serve.json)

### FN001033 tslib | Required

Install SharePoint Framework dependency package tslib

Execute the following command:

```sh
npm i -SE tslib@2.3.1
```

File: [./package.json:9:3](./package.json)

### FN002009 @microsoft/sp-tslint-rules | Required

Remove SharePoint Framework dev dependency package @microsoft/sp-tslint-rules

Execute the following command:

```sh
npm un -D @microsoft/sp-tslint-rules
```

File: [./package.json:33:5](./package.json)

### FN002013 @types/webpack-env | Required

Install SharePoint Framework dev dependency package @types/webpack-env

Execute the following command:

```sh
npm i -DE @types/webpack-env@1.15.2
```

File: [./package.json:29:3](./package.json)

### FN006004 package-solution.json developer | Optional

In package-solution.json add developer section

```json
{
  "solution": {
    "developer": {
      "name": "",
      "privacyUrl": "",
      "termsOfUseUrl": "",
      "websiteUrl": "",
      "mpnId": "Undefined-1.15.0"
    }
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN015003 tslint.json | Required

Remove file tslint.json

Execute the following command:

```sh
Remove-Item "tslint.json"
```

File: [tslint.json](tslint.json)

### FN015008 .eslintrc.js | Required

Add file .eslintrc.js

Execute the following command:

```sh
@'
require('@rushstack/eslint-config/patch/modern-module-resolution');
export default {
  extends: ['@microsoft/eslint-config-spfx/lib/profiles/react'],
  parserOptions: { tsconfigRootDir: __dirname }
};
'@ | Out-File -FilePath ".eslintrc.js"
```

File: [.eslintrc.js](.eslintrc.js)

### FN006005 package-solution.json metadata | Required

In package-solution.json add metadata section

```json
{
  "solution": {
    "metadata": {
      "shortDescription": {
        "default": "modern-charts description"
      },
      "longDescription": {
        "default": "modern-charts description"
      },
      "screenshotPaths": [],
      "videoUrl": "",
      "categories": []
    }
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN006006 package-solution.json features | Required

In package-solution.json add features for components

```json
{
  "solution": {
    "features": [
      {
        "title": "modern-charts ModernChartsWebPart Feature",
        "description": "The feature that activates ModernChartsWebPart from the modern-charts solution.",
        "id": "50dbeca0-48ed-4459-800f-b75b13159b21",
        "version": "1.0.0.4",
        "componentIds": [
          "50dbeca0-48ed-4459-800f-b75b13159b21"
        ]
      }
    ]
  }
}
```

File: [./config/package-solution.json:3:3](./config/package-solution.json)

### FN002003 @microsoft/sp-webpart-workbench | Required

Remove SharePoint Framework dev dependency package @microsoft/sp-webpart-workbench

Execute the following command:

```sh
npm un -D @microsoft/sp-webpart-workbench
```

File: [./package.json:34:5](./package.json)

### FN007003 serve.json api | Required

From serve.json remove the api property

```json

```

File: [./config/serve.json:6:3](./config/serve.json)

### FN015007 config/copy-assets.json | Required

Remove file config/copy-assets.json

Execute the following command:

```sh
Remove-Item "config/copy-assets.json"
```

File: [config/copy-assets.json](config/copy-assets.json)

### FN005002 deploy-azure-storage.json workingDir | Required

Update deploy-azure-storage.json workingDir

```json
{
  "workingDir": "./release/assets/"
}
```

File: [./config/deploy-azure-storage.json:3:3](./config/deploy-azure-storage.json)

### FN002005 @types/chai | Required

Remove SharePoint Framework dev dependency package @types/chai

Execute the following command:

```sh
npm un -D @types/chai
```

File: [./package.json:35:5](./package.json)

### FN002006 @types/mocha | Required

Remove SharePoint Framework dev dependency package @types/mocha

Execute the following command:

```sh
npm un -D @types/mocha
```

File: [./package.json:36:5](./package.json)

### FN012013 tsconfig.json exclude property | Required

Remove tsconfig.json exclude property

```json
{
  "exclude": []
}
```

File: [./tsconfig.json:34:3](./tsconfig.json)

### FN012018 tsconfig.json es2015.promise lib | Required

Add es2015.promise lib in tsconfig.json

```json
{
  "compilerOptions": {
    "lib": [
      "es2015.promise"
    ]
  }
}
```

File: [./tsconfig.json:25:5](./tsconfig.json)

### FN012019 tsconfig.json es6-promise types | Required

Remove es6-promise type in tsconfig.json

```json
{
  "compilerOptions": {
    "types": [
      "es6-promise"
    ]
  }
}
```

File: [./tsconfig.json:22:7](./tsconfig.json)

### FN013002 gulpfile.js serve task | Required

Before 'build.initialize(require('gulp'));' add the serve task

```js
var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

```

File: [./gulpfile.js](./gulpfile.js)

### FN019002 tslint.json extends | Required

Update tslint.json extends property

```json
{
  "extends": "./node_modules/@microsoft/sp-tslint-rules/base-tslint.json"
}
```

File: [./tslint.json:3:3](./tslint.json)

### FN021002 engines | Required

Remove package.json property

```json
{
  "engines": "undefined"
}
```

File: [./package.json:6:3](./package.json)

### FN001005 @types/react | Required

Remove SharePoint Framework dependency package @types/react

Execute the following command:

```sh
npm un -S @types/react
```

File: [./package.json:16:5](./package.json)

### FN001006 @types/react-dom | Required

Remove SharePoint Framework dependency package @types/react-dom

Execute the following command:

```sh
npm un -S @types/react-dom
```

File: [./package.json:17:5](./package.json)

### FN001007 @types/webpack-env | Required

Remove SharePoint Framework dependency package @types/webpack-env

Execute the following command:

```sh
npm un -S @types/webpack-env
```

File: [./package.json:18:5](./package.json)

### FN001010 @types/es6-promise | Required

Remove SharePoint Framework dependency package @types/es6-promise

Execute the following command:

```sh
npm un -S @types/es6-promise
```

File: [./package.json:15:5](./package.json)

### FN002014 @types/es6-promise | Required

Install SharePoint Framework dev dependency package @types/es6-promise

Execute the following command:

```sh
npm i -DE @types/es6-promise@0.0.33
```

File: [./package.json:29:3](./package.json)

### FN012012 tsconfig.json include property | Required

Add to the tsconfig.json include property

```json
{
  "include": [
    "src/**/*.tsx"
  ]
}
```

File: [./tsconfig.json:31:3](./tsconfig.json)

### FN017001 Run npm dedupe | Optional

If, after upgrading npm packages, when building the project you have errors similar to: "error TS2345: Argument of type 'SPHttpClientConfiguration' is not assignable to parameter of type 'SPHttpClientConfiguration'", try running 'npm dedupe' to cleanup npm packages.

Execute the following command:

```sh
npm dedupe
```

File: [./package.json](./package.json)

## Summary

### Execute script

```sh
npm un -S office-ui-fabric-react @types/react @types/react-dom @types/webpack-env @types/es6-promise
npm un -D @microsoft/sp-build-web gulp ajv @microsoft/sp-tslint-rules @microsoft/sp-webpart-workbench @types/chai @types/mocha
npm i -SE @microsoft/sp-core-library@1.24.1 @microsoft/sp-office-ui-fabric-core@1.24.1 @microsoft/sp-webpart-base@1.24.1 @microsoft/sp-property-pane@1.24.1 react@18.3.1 react-dom@18.3.1 @fluentui/react@8.106.4 tslib@2.3.1
npm i -DE @microsoft/sp-module-interfaces@1.24.1 @microsoft/eslint-plugin-spfx@1.24.1 @microsoft/eslint-config-spfx@1.24.1 @microsoft/spfx-web-build-rig@1.24.1 @microsoft/spfx-heft-plugins@1.24.1 @types/react@18.2.79 @types/react-dom@18.2.25 @rushstack/heft@1.3.2 eslint-plugin-react-hooks@5.2.0 eslint@9.37.0 @types/jest@30.0.0 @rushstack/eslint-config@4.5.2 typescript@~5.8.0 @typescript-eslint/parser@8.46.2 css-loader@7.1.2 @types/heft-jest@1.0.2 @microsoft/rush-stack-compiler-5.3@0.1.0 @types/webpack-env@1.15.2 @types/es6-promise@0.0.33
npm pkg set overrides.serialize-javascript=^7.1.3 overrides.@rushstack/heft=1.3.2 overrides.qs=>=6.15.2 overrides.uuid=>=11.1.1
npm i
npm dedupe
@'
const spfxProfile = require('@microsoft/eslint-config-spfx/lib/flat-profiles/react');

module.exports = [
  ...spfxProfile,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      }
    }
  }
];
'@ | Out-File -FilePath "eslint.config.js"
Remove-Item "src/index.ts"
Remove-Item "gulpfile.js"
@'
{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json"
}

'@ | Out-File -FilePath "tsconfig.json"
@'
{
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/typescript.json",

  "staticAssetsToCopy": {
    "fileExtensions": [".resx", ".jpg", ".png", ".woff", ".eot", ".ttf", ".svg", ".gif"],

    "includeGlobs": ["webparts/*/loc/*.js"]
  }
}

'@ | Out-File -FilePath "config/typescript.json"
@'
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/sass.schema.json"
}
'@ | Out-File -FilePath "config/sass.json"
Remove-Item "tslint.json"
@'
require('@rushstack/eslint-config/patch/modern-module-resolution');
export default {
  extends: ['@microsoft/eslint-config-spfx/lib/profiles/react'],
  parserOptions: { tsconfigRootDir: __dirname }
};
'@ | Out-File -FilePath ".eslintrc.js"
Remove-Item "config/copy-assets.json"
```

### Modify files

#### [./.yo-rc.json](./.yo-rc.json)

Update version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.24.1"
  }
}
```

Update useGulp property in .yo-rc.json:

```json
{
    "useGulp": false
}
```

Update @microsoft/teams-js SDK version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/teams-js": "2.24.0"
    }
  }
}
```

Update nodeVersion in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "nodeVersion": "22.14.0"
  }
}
```

Update @microsoft/microsoft-graph-client SDK version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "sdkVersions": {
      "@microsoft/microsoft-graph-client": "3.0.2"
    }
  }
}
```

#### [./tsconfig.json](./tsconfig.json)

Update tsconfig.json watchOptions.excludeDirectories property:

```json
{
  "watchOptions": {
    "excludeDirectories": ["**/teams","**/temp/copilot"]
  }
}
```

Update tsconfig.json extends property:

```json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-5.3/includes/tsconfig-web.json"
}
```

Add noImplicitAny in tsconfig.json:

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Remove tsconfig.json exclude property:

```json
{
  "exclude": []
}
```

Add es2015.promise lib in tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": [
      "es2015.promise"
    ]
  }
}
```

Remove es6-promise type in tsconfig.json:

```json
{
  "compilerOptions": {
    "types": [
      "es6-promise"
    ]
  }
}
```

Add to the tsconfig.json include property:

```json
{
  "include": [
    "src/**/*.tsx"
  ]
}
```

#### [./package.json](./package.json)

Add resolution for package @types/react:

```json
{
  "resolutions": {
    "@types/react": "18.2.79"
  }
}
```

Update package.json engines.node property:

```json
{
  "engines": {
    "node": ">=22.14.0 <23.0.0 || >=24.0.0 <25.0.0 || >=26.0.0 <27.0.0"
  }
}
```

Remove package.json property:

```json
{
  "main": "undefined"
}
```

Update package.json scripts.build property:

```json
{
  "scripts": {
    "build": "heft test --clean --production && heft package-solution --production"
  }
}
```

Remove package.json scripts.test property:

```json
{
  "scripts": {
    "test": ""
  }
}
```

Update package.json scripts.clean property:

```json
{
  "scripts": {
    "clean": "heft clean"
  }
}
```

Update package.json scripts.start property:

```json
{
  "scripts": {
    "start": "heft start --clean"
  }
}
```

Update package.json scripts.eject-webpack property:

```json
{
  "scripts": {
    "eject-webpack": "heft eject-webpack"
  }
}
```

Remove package.json property:

```json
{
  "engines": "undefined"
}
```

#### [src/webparts/modernCharts/components/ModernCharts.module.scss](src/webparts/modernCharts/components/ModernCharts.module.scss)

Add scss file import:

```scss
@import 'pkg:@fluentui/react/dist/sass/References.scss'
```

Remove scss file import:

```scss
@import '~office-ui-fabric-react/dist/sass/References.scss'
```

#### [.vscode/launch.json](.vscode/launch.json)

In the .vscode folder, add the launch.json file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Hosted workbench",
      "type": "msedge",
      "request": "launch",
      "url": "https://{tenantDomain}/_layouts/workbench.aspx",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///.././src/*": "${webRoot}/src/*",
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "-incognito"
      ]
    }
  ]
}
```

#### [./config/serve.json](./config/serve.json)

Update serve.json initialPage URL:

```json
{
  "initialPage": "https://{tenantDomain}/_layouts/workbench.aspx"
}
```

Update serve.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/spfx-serve.schema.json"
}
```

From serve.json remove the api property:

```json

```

#### [./config/package-solution.json](./config/package-solution.json)

In package-solution.json add developer section:

```json
{
  "solution": {
    "developer": {
      "name": "",
      "privacyUrl": "",
      "termsOfUseUrl": "",
      "websiteUrl": "",
      "mpnId": "Undefined-1.15.0"
    }
  }
}
```

In package-solution.json add metadata section:

```json
{
  "solution": {
    "metadata": {
      "shortDescription": {
        "default": "modern-charts description"
      },
      "longDescription": {
        "default": "modern-charts description"
      },
      "screenshotPaths": [],
      "videoUrl": "",
      "categories": []
    }
  }
}
```

In package-solution.json add features for components:

```json
{
  "solution": {
    "features": [
      {
        "title": "modern-charts ModernChartsWebPart Feature",
        "description": "The feature that activates ModernChartsWebPart from the modern-charts solution.",
        "id": "50dbeca0-48ed-4459-800f-b75b13159b21",
        "version": "1.0.0.4",
        "componentIds": [
          "50dbeca0-48ed-4459-800f-b75b13159b21"
        ]
      }
    ]
  }
}
```

#### [./config/deploy-azure-storage.json](./config/deploy-azure-storage.json)

Update deploy-azure-storage.json workingDir:

```json
{
  "workingDir": "./release/assets/"
}
```

#### [./gulpfile.js](./gulpfile.js)

Before 'build.initialize(require('gulp'));' add the serve task:

```js
var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

```

#### [./tslint.json](./tslint.json)

Update tslint.json extends property:

```json
{
  "extends": "./node_modules/@microsoft/sp-tslint-rules/base-tslint.json"
}
```
