import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('../supabase.public.json', import.meta.url), 'utf8'));
const url = process.env.SUPABASE_URL || config.url;
const key = process.env.SUPABASE_PUBLISHABLE_KEY || config.publishableKey;
if (new URL(url).hostname !== config.projectRef + '.supabase.co') {
  throw new Error('Supabase URL does not match the CLASSIC project reference.');
}
const response = await fetch(new URL('/auth/v1/settings', url), {
  headers: { apikey: key },
  signal: AbortSignal.timeout(15000),
});
if (!response.ok) throw new Error('Supabase connection failed: HTTP ' + response.status);
await response.json();
console.log('Connected to CLASSIC Supabase (' + config.projectRef + ').');
