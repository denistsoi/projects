# monorepo

## Description

Monorepo for sites & packages.

## Aims

- Consolidate development of components for sites
- Ensure all sites are stored within sites, regardless of frontend framework

## Project Structure

```
sites/                // static or next sites  
  dtsoi               // dtsoi.com (personal) on vuepress site  
  erictsoi            // erictsoi.com (personal)   
  grassroots          // grassroots future (nextjs)  
README.md             // this
```

## Generating a new sites

```
cd sites/
npx create-next-app <name-of-new-site> -e https://github.com/denistsoi/template
```

## Author

Denis Tsoi <denistsoi@gmail.com>

## License

MIT
