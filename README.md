# CLASSIC

New application environment backed by the CLASSIC Supabase project.

- Project reference: `ejppdhrshpyjlqlxitxa`
- API URL: https://ejppdhrshpyjlqlxitxa.supabase.co
- Dashboard: https://supabase.com/dashboard/project/ejppdhrshpyjlqlxitxa

## Verify the connection

With Node.js 22 or later:

```sh
npm run check:supabase
```

No dependency installation is needed. This checks the Auth settings endpoint using the public publishable key. It does not create users or modify data, and does not test table permissions.

## Application configuration

`supabase.public.json` contains the project's public URL and publishable key. An application can import this configuration, or use the equivalent variables in `.env.example`. Copy that file to `.env` for local overrides. For Vite use `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`; for Next.js use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

When adding the Supabase SDK, initialize its client with this project's URL and publishable key. Hosting environment variables must also be configured when a hosting provider is chosen.

Publishable keys are intended for public clients. Never commit secret keys, service-role keys, or database passwords.

## Environment scope

This repository starts fresh; it does not copy the previous website's tables, files, users, or functions. Application code, database migrations, storage policies, and production authentication redirect URLs have not been created. Add them when application requirements and hosting URLs are known. Enable Row Level Security and appropriate policies for exposed application tables.

This setup configures API access. It does not enable Supabase's separate GitHub integration or automatic migration deployments.
