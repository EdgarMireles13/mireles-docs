# ⚖️ Generador de Documentos - Mireles González & Asociados

[![CI](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/ci.yml)
[![Deploy](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/codeql.yml/badge.svg)](https://github.com/EdgarMireles13/mireles-docs/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Aplicación web para generar escritos jurídicos mexicanos (amparos, quejas, demandas laborales, etc.) con plantillas editables y persistencia local.

🌐 **Demo en vivo:** https://edgarmireles13.github.io/mireles-docs/

## ✨ Características

- 4 plantillas: amparo (conceptos de violación), queja, demanda laboral, escrito libre
- Wizard 4 pasos: expediente → plantilla → datos → vista previa
- Persistencia en `localStorage` (expedientes y borradores)
- Toasts y confirmaciones inline
- Copiar al portapapeles y descargar `.txt`
- Modo oscuro (próximamente)
- Tests con Vitest (37 tests pasando)

## 🚀 Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

## 🧪 Tests

```bash
npm test                 # una vez
npm run test:watch       # watch
npm run test:coverage    # con coverage
```

## 📦 Build

```bash
npm run build      # genera dist/
npm run preview    # preview del build
```

## 🏗️ Estructura

```
src/
├── App.jsx                    # Componente principal
├── main.jsx                   # Entry point
├── index.css                  # Estilos Tailwind
├── config/                    # Constantes y configuración
│   └── index.js
├── generators/                # Generadores de documentos
│   ├── index.js
│   ├── libre.js
│   ├── amparo.js
│   ├── queja.js
│   └── laboral.js
├── components/                # Componentes reutilizables
│   ├── Toast.jsx              # Provider + useConfirm
│   └── BorradorItem.jsx
├── hooks/                     # (reservado)
└── utils/                     # Helpers
    ├── helpers.js
    └── store.js

test/                          # Vitest
├── setup.js
├── generators.test.js
└── BorradorItem.test.jsx

.github/workflows/             # CI/CD
├── ci.yml
├── deploy.yml
├── codeql.yml
└── dependabot-auto-merge.yml
```

## 📜 Licencia

MIT

## 🏷️ Topics

`react` · `vite` · `tailwindcss` · `legal` · `mexico` · `amparo` · `document-generator` · `vitest` · `javascript`
