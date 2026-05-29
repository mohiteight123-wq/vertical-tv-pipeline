# GitHub Upload Files - Complete Reference

## 11 Files to Upload to GitHub

Your repository: `https://github.com/mohiteight123-wq/vertical-tv-pipeline`

---

## ROOT LEVEL FILES

### 1. `vercel.json` ⭐ CRITICAL
Fixes the Vercel deployment error. **MUST UPLOAD FIRST.**

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Location:** Root directory (same level as package.json)

---

### 2. `package.json`
Contains all dependencies and build scripts.

```json
{
  "name": "vertical-tv-pipeline",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^15.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

**Location:** Root directory

---

### 3. `tsconfig.json`
TypeScript configuration.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitReturns": true,
    "skipDefaultLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  },
  "include": ["app"],
  "exclude": ["node_modules"]
}
```

**Location:** Root directory

---

### 4. `next.config.ts`
Next.js configuration.

```typescript
import type { NextConfig } from "next";
const config: NextConfig = { react: { strict: true }, experimental: { typedRoutes: true } };
export default config;
```

**Location:** Root directory

---

### 5. `postcss.config.js`
PostCSS configuration for Tailwind.

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

**Location:** Root directory

---

### 6. `tailwind.config.ts`
Tailwind CSS configuration.

```typescript
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: []
};
export default config;
```

**Location:** Root directory

---

### 7. `.gitignore`
Files to ignore in Git.

```
node_modules/
.pnp
.pnp.js
.coverage/
.next/
out/
dist/
build/
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.idea/
.vscode/
*.swp
*.swo
```

**Location:** Root directory (note: starts with dot)

---

### 8. `README.md`
Project documentation.

```markdown
# Vertical TV Pipeline

Micro Drama Script Analysis Dashboard - Powered by AI and Next.js

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

**Location:** Root directory

---

## APP FOLDER FILES

Create a folder named `app` in the root and upload these 3 files inside it.

### 9. `app/layout.tsx`
Root layout wrapper.

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertical TV Pipeline",
  description: "Micro Drama Script Analysis Dashboard"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**Location:** `app/layout.tsx`

---

### 10. `app/page.tsx`
Homepage.

```typescript
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4">Vertical TV Pipeline</h1>
        <p className="text-xl text-gray-300 mb-8">Micro Drama Script Analysis Dashboard</p>
        <p className="text-lg text-gray-400">Powered by AI and Next.js</p>
      </div>
    </main>
  );
}
```

**Location:** `app/page.tsx`

---

### 11. `app/globals.css`
Global CSS with Tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { @apply antialiased; }
```

**Location:** `app/globals.css`

---

## UPLOAD SUMMARY

| File | Location | Type | Size |
|------|----------|------|------|
| vercel.json | Root | JSON | 90 B |
| package.json | Root | JSON | 534 B |
| tsconfig.json | Root | JSON | 683 B |
| next.config.ts | Root | TypeScript | 156 B |
| postcss.config.js | Root | JavaScript | 81 B |
| tailwind.config.ts | Root | TypeScript | 233 B |
| .gitignore | Root | Text | 250 B |
| README.md | Root | Markdown | 233 B |
| layout.tsx | `app/` | TypeScript | 420 B |
| page.tsx | `app/` | TypeScript | 380 B |
| globals.css | `app/` | CSS | 95 B |

---

## HOW TO UPLOAD

### Quick Steps:
1. Download all files above
2. Create folder: `app/`
3. Put the 3 app files inside: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
4. Put the 8 root files in root directory
5. Upload all to GitHub: https://github.com/mohiteight123-wq/vertical-tv-pipeline

### After Upload:
- ✅ Vercel auto-deploys
- ✅ Build takes 1-2 minutes
- ✅ Site goes live at: **https://vertical-tv-pipeline.vercel.app**

---

## FOLDER STRUCTURE (What it should look like):

```
vertical-tv-pipeline/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── README.md
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

That's it! You're ready to deploy! 🚀
