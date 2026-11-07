# create-stack

An interactive CLI that scaffolds a new project in one command. It copies a
template for the chosen stack, rewrites `package.json`, optionally initialises Git,
and installs dependencies with the matching package manager.

## Supported stacks

| Category | Stacks |
| :--- | :--- |
| Frontend | Next.js · React + Vite · Vue + Vite · Astro · SvelteKit |
| Backend | Express · NestJS · FastAPI · Django · Go Fiber · Elysia.js · Laravel |
| Mobile | Flutter · Expo (React Native) |
| BaaS | Supabase |

Each stack declares its own package manager, and the generator uses it:

| Package manager | Stacks |
| :--- | :--- |
| `pnpm` | Next.js, React, Vue, Astro, SvelteKit, Express, NestJS, Expo |
| `pip` | FastAPI, Django |
| `go` | Fiber |
| `bun` | Elysia.js |
| `composer` | Laravel |
| `flutter` | Flutter |
| none | Supabase |

## Usage

Run from a clone. There is no published npm package for this build, so use the
repository directly:

```bash
pnpm install
node ./bin/cli.js        # or: pnpm start
```

The CLI asks four things:

1. **Stack** — picked from the list above, grouped by category
2. **Project name** — default `my-app`, used as the folder name
3. **Initialise Git?** — default yes
4. **Install dependencies now?** — default yes

The folder is created relative to the current working directory. pnpm is checked
and installed first if it is missing, because it is the default manager for the
JavaScript stacks.

## Layout

```
bin/cli.js              entry point, requires src/index.js
src/index.js            orchestration: pnpm check → prompts → generate
src/prompts.js          the four questions and their validation
src/config.js           stack registry (title, category, package manager)
src/generator.js        folder creation, template copy, package.json rewrite, git init, install
src/utils/fileOps.js    filesystem helpers
src/utils/packageManager.js  per-manager install commands + pnpm bootstrap
src/utils/logger.js     coloured logging
src/templates/<stack>/  one folder per supported stack
__tests__/              vitest suites for fileOps and generator
```

## Tests

```bash
pnpm test          # single run
pnpm test:watch    # watch mode
```

---

## Bahasa Indonesia

**create-stack** adalah CLI interaktif untuk menyiapkan proyek baru dalam satu perintah: menyalin template sesuai stack pilihan, menulis ulang `package.json`, opsional menginisialisasi Git, lalu memasang dependensi dengan package manager yang sesuai.

---

## License

MIT — see [LICENSE](LICENSE).
