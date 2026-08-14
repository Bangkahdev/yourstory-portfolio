

Website portofolio profesional untuk startup "Your Story", sebuah platform kreatif untuk menulis dan membaca cerita.

## 🚀 Fitur Utama

- **Modern & Responsif**: Dibangun dengan React + Tailwind CSS.
- **Interaktif**: Animasi halus dan navigasi yang ramah pengguna.
- **Struktur Modular**: Menggunakan arsitektur `src/` yang rapi dengan pemisahan komponen.
- **SEO Friendly**: Struktur HTML semantik dan meta tags.

## 📂 Struktur Folder

```bash
/
├── public/              # Aset statis (index.html disajikan dari root di Vite)
├── src/
│   ├── components/      # Komponen UI
│   │   ├── layout/      # Navbar, Footer
│   │   └── sections/    # Bagian halaman (Hero, About, dll)
│   ├── hooks/           # Custom React Hooks
│   ├── lib/             # Utilities (cn, helpers)
│   ├── types/           # TypeScript definitions
│   ├── App.tsx          # Komponen utama
│   └── index.tsx        # Entry point
└── index.html           # Entry point HTML
```

## 🛠️ Teknologi

- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)

## 📝 Catatan Pengembang

Project ini menggunakan struktur file standar industri. Untuk menambahkan fitur baru:
1. Buat komponen di `src/components/`
2. Definisikan tipe data di `src/types/index.ts`
3. Import dan gunakan di `src/App.tsx`
