# CODEMAKERS REBEL — Genesis Demo

**The complete reference application for REBEL.**  
*Built with REBEL. Maintained by CODEMAKERS LLC.*

Genesis is a separate, application-level demo of the [REBEL frontend engine](https://github.com/codemakers-llc/rebel) created and architected by Wilton Monroy. It uses **the published npm package** `@code-makers/rebel` rather than a vendored Engine copy. The demo's Node.js REST API and `runtime.json` storage are examples, not requirements of REBEL itself.

> **Status:** Alpha demo, not production-certified. It contains illustrative data, and its audit log and workflow are not production-grade security or authorization systems.

## Requirements

Node.js 20+ and an internet connection for the initial npm installation. The browser app uses native JavaScript ES Modules.

## Quick start

```bash
npm install
npm start
```

Open **http://localhost:3100**. When installing from a fresh Git clone, `npm install` creates the correct `package-lock.json` using the public npm registry. Commit that generated lockfile for reproducible deployments; use `npm ci` thereafter.

The dependency is currently **pinned to `@code-makers/rebel@0.1.0-alpha.8.15`**, the published release. REBEL alpha.8.16 (starter fix) is prepared separately but **not yet published**. Upgrade Genesis only after publishing and testing the new Engine release.

## What's included

- **Dashboard:** request KPIs, workflow status, recent requests and a telemetry sidebar.
- **Catalogs:** Modules, Request Categories, and Evaluation Criteria CRUD interfaces.
- **Request Submission:** create, edit and submit requests through the demo workflow.
- **Request Evaluation:** review eligible requests, approve or reject with observations.
- **View Designer:** declarative configuration editor, preview and generated view storage.
- **Menu Designer:** module/view navigation, ordering and visibility.
- **Theme Studio:** palettes, light/dark mode and presentation settings.
- **Audit Trail:** illustrative records of demo operations.

The application opens without real authentication or complex role controls. Do not deploy this demo as a secure production service.

## Project structure

```text
genesis/
  frontend/
    features/       # Application-specific views and configuration
    components/     # Genesis-specific compositions
  scripts/
    server.js       # Node.js demo REST API + static asset server
    data/runtime.json
  tests/
  package.json      # Dependency downloaded from npm
  Dockerfile
  .env.example
```

The Engine lives exclusively in `node_modules/@code-makers/rebel` after installation. Do **not** commit `node_modules/` or copy `dist/` into Genesis. Genesis UI behavior is its own application code using REBEL.

## Runtime and APIs

The demo uses `MODE=proto`, a local JSON data file, and a Node.js server. `MODE=dev` and `MODE=prod` are **reserved and not implemented**. Runtime configuration, theme settings, menu items and business records are maintained through the demo API. Generated view JavaScript files are stored under `frontend/features/`.

`/api/bootstrap` supplies configuration to `ConfigStore` in memory; re-entering views should fetch fresh business records, not reuse stale cached responses. Permissions must be enforced in any real production backend.

## Tests

```bash
npm test
```

Automated tests cover demo API and UI contracts. A browser/device end-to-end verification is still recommended before showcasing or deploying the demo.

## Docker

```bash
docker build -t codemakers-rebel-genesis .
docker run --rm -p 3100:3100 codemakers-rebel-genesis
```

The Dockerfile installs REBEL directly from npm. For repeatable production builds, generate and commit `package-lock.json` and replace `npm install` with `npm ci` once verified. Do not use this demo's unauthenticated APIs publicly without additional security.

## About the CLI

The published Engine command `npx rebel init proto` creates a **minimal prototype starter**. It does **not currently download Genesis**. Genesis is distributed independently; a future REBEL CLI may offer a separate, versioned Genesis template.

## Authorship & license

**REBEL engine:** created and architected by Wilton Monroy; published and maintained by CODEMAKERS LLC under the MIT License.

**Genesis Demo:** released under the [MIT License](LICENSE), Copyright © 2026 CODEMAKERS LLC. See [AUTHORS.md](AUTHORS.md) for author attribution. **REBEL Engine:** independently distributed under the [MIT License](https://github.com/codemakers-llc/rebel/blob/main/LICENSE). These are separately licensed projects.

- Engine GitHub: https://github.com/codemakers-llc/rebel
- npm: https://www.npmjs.com/package/@code-makers/rebel
- Company: https://code-makers.com

**REBEL — Less framework. More freedom.**
