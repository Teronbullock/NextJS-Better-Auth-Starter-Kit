# Next.js Better Auth Starter
A modern, batteries-included starter kit for Next.js applications, pre-configured with a robust authentication layer and type-safe database migrations.

## Tech Stack
Framework: Next.js 15 (App Router)

Auth: Better Auth

ORM: Drizzle ORM

Database: PostgreSQL (with drizzle-kit)

Styling: Tailwind CSS

## Features
Modular Architecture: Auth logic scoped within features/auth.

Type-Safe Schema: Auto-generated auth schemas via Better Auth CLI.

Smart Environment Handling: Zero-config .env.local support for Next.js and Drizzle.

Seamless Migrations: Integrated Drizzle Kit workflow for schema syncing.

## Quick Start
### Install Dependencies:

```bash
  pnpm install
```

### Generate an Auth Secret:

```bash
  echo "BETTER_AUTH_SECRET=$(openssl rand -hex 32)" >> .env
```

### Run Dev Server:

```bash
  pnpm dev
```