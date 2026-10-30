# Deploy Panetones para Vender

Source tarball: `artifacts/panetones-lp.tar.gz`.

It extracts to a folder named `panetones-para-vender/` with `package.json`, `package-lock.json`, `src/`, `public/`, and the Next.js config. It does not include `node_modules`, `.next`, or `.git`.

## Framework

Next.js 15 (App Router), TypeScript, Tailwind CSS v4.

`next.config.ts` sets `output: "export"`. `next build` writes a static site to `out/`.

## Commands

```bash
tar -xzf panetones-lp.tar.gz
cd panetones-para-vender
npm install
npm run build
```

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Install command | `npm install` |
| Build command | `npm run build` (`next build`) |
| Output directory | Leave the Vercel Next.js default. For a plain static host, serve `out/`. |
| Node.js | 22.x |
| Environment variables | None |

Existing Vercel project: `panetones-para-vender`  
Team id: `team_AB3mmQnsvuNSLlWhZTJpN7Ff`

```bash
vercel --scope team_AB3mmQnsvuNSLlWhZTJpN7Ff deploy --yes
```

Target that project name. A preview deploy is enough. Do not promote to production until the real checkout URL replaces `https://google.com` in `src/config/sales.ts`.

## Portuguese ticket routes

`/` and `/pt` use the first price pair (R$ 9,99 / R$ 27,00).

| Route | Essencial | Completo |
| --- | --- | --- |
| `/pt/9-99-27` | R$ 9,99 | R$ 27,00 |
| `/pt/19-90-47-90` | R$ 19,90 | R$ 47,90 |
| `/pt/47-90-97` | R$ 47,90 | R$ 97,00 |

The same three slugs exist under `/en/`, `/es/`, and `/fr/`. Prices stay in Brazilian reais.

## Git

Origin repository: `lablab/tmp-5d8cf688209185dc`  
Remote: `https://origin.cursor.com/git/lablab/tmp-5d8cf688209185dc.git`  
Branch: `main`
