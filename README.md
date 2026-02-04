# Northwind AI

AI Automation Web Services

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![React](https://img.shields.io/badge/React-19.x-58c4dc.svg)
![Next](https://img.shields.io/badge/Next-1.x-000.svg)

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Setup

```sh
mkdir northwind-ai && cd northwind-ai

npx shadcn@latest init
npm run dev

# http://127.0.0.1:3000
```

## Resources

- [Shadcn/ui installation](https://ui.shadcn.com/docs/installation/next)
- [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [PWA manifest.json API](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)

## Cheatsheet

```sh
#
rm -rf .next package-lock.json node_modules
npm install
npm run dev

#
npm i clsx lodash date-fns
npm i --save-dev @types/lodash

# 
npm i react-hook-form @hookform/resolvers zod
```

#### Shadcn/ui ... components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components/shadcn",
    "utils": "@/components/shadcn/utils",
    "ui": "@/components/shadcn/ui",
    "lib": "@/components/shadcn",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```
