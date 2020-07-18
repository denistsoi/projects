# monorepo

## Description

Monorepo for sites & packages.

## Aims

- Consolidate development of components for gatsby/next/vue sites
- Ensure all sites are stored within sites, regardless of frontend framework

## Project Structure

app/
  <app:name>          // standalone apps - maybe CRA
  api/                // apis to be consumed by sites or apps
packages/             // lerna packages (typically reusable components)
sites/                // static or next sites
lerna.json
package.json
README.md             
tailwind.config.js    // tailwind config to use tailwind intellisense in vscode

## Author

Denis Tsoi <denistsoi@gmail.com>

## License

MIT
