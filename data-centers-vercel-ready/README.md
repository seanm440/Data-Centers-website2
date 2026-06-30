# Data Centers - Vercel-ready Vite app

This version has been converted from the original Manus/Express setup into a normal static Vite deployment that Vercel can build reliably.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Deploy to Vercel

1. Upload/import this project folder to Vercel.
2. Vercel should read `vercel.json` automatically.
3. Use these settings if Vercel asks:
   - Framework Preset: `Vite`
   - Install Command: `npm install --legacy-peer-deps`
   - Build Command: `npm run build`
   - Output Directory: `dist`

## What changed

- Removed the Express server build/start path.
- Removed Manus-only Vite runtime/debug/proxy plugins.
- Added `vercel.json` with SPA rewrites so routes like `/business` work after refresh.
- Replaced Manus storage references with static files inside `client/public/manus-storage`.
- Removed the old `pnpm-lock.yaml` and Manus patch setup that could break dependency installs.
- Added a clean `package-lock.json` for npm-based Vercel installs.

Verified with:

```bash
npm run build
npm run check
```
