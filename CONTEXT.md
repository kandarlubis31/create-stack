# create-stack — Project Context

## Ringkasan

CLI interaktif untuk membuat proyek baru sekali jalan: pilih stack, dan alat ini menyalin template,
menulis ulang `package.json`, menyiapkan Git, lalu memasang dependensi dengan package manager yang
sesuai stack tersebut.

## Cara kerja

1. `prompts` menanyakan nama proyek, stack, dan package manager.
2. Template stack yang dipilih disalin dari `src/templates`.
3. Placeholder nama di `package.json` (dan berkas terkait) diganti.
4. `git init` bila diminta.
5. Dependensi dipasang: npm, pnpm, yarn, bun, atau pip/composer untuk stack non-JS — sesuai deklarasi
   stack, bukan pilihan global.

Output terminal memakai `ora` (spinner) dan `chalk`.

## Stack yang didukung

| Kategori | Stack |
| :--- | :--- |
| Frontend | Next.js, React + Vite, Vue + Vite, Astro, SvelteKit |
| Backend | Express, NestJS, FastAPI, Django, Go Fiber, Elysia.js, Laravel |
| Mobile | Flutter, Expo (React Native) |
| BaaS | Supabase |

## Struktur

```
bin/         Titik masuk perintah
src/         Logika generator + templates/ per stack
__tests__/   Vitest: perilaku generator
```

## Menjalankan

```bash
pnpm install
pnpm test        # vitest
node bin/create-stack.js
```

## Catatan

- Setiap stack menyimpan aturan sendiri (package manager, nama folder, berkas yang di-rename).
  Menambah stack berarti menambah template dan entri metadata, tanpa menyentuh alur inti.
- Uji generator dengan direktori tujuan sementara agar tidak mengotori workspace.
