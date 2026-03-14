# Rodyna Farmacias — Frontend

E-commerce web app for Rodyna Farmacias, a pharmacy chain in Buenos Aires, Argentina.
Mobile-first design, built for the AMBA market (same-day delivery + in-store pickup).

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite (SWC) |
| Styling | Tailwind CSS v3 |
| Routing | React Router v7 |
| Forms | React Hook Form + Zod |
| State management | Zustand (auth + cart, persisted) |
| HTTP client | Axios |
| Internationalization | react-i18next (ES / EN) |
| Linting | ESLint + typescript-eslint |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL |
| `VITE_MP_PUBLIC_KEY` | Mercado Pago public key |
| `VITE_APP_NAME` | App display name |
| `VITE_DEFAULT_LOCALE` | Default language (`es`) |
| `VITE_FALLBACK_LOCALE` | Fallback language (`en`) |
| `VITE_DEFAULT_CURRENCY` | Default currency (`ARS`) |
| `VITE_USD_RATE` | Manual ARS→USD exchange rate |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID |

---

## Project Structure

```
src/
├── app/          # Router setup
├── components/   # Shared UI (layout, common)
├── features/     # Auth, catalog, cart, checkout
├── hooks/        # Custom React hooks
├── i18n/         # Translation files (es.json, en.json)
├── lib/          # Axios instance, utils, branch data
├── pages/        # Page components
├── store/        # Zustand stores (auth, cart)
└── styles/       # Global styles
```

---

## Pages

| Route | Page | Status |
|---|---|---|
| `/` | Home | Done |
| `/nosotros` | About | Done |
| `/sucursales` | Branches | Done |
| `/terminos-y-condiciones` | Terms & Conditions | Done |
| `/catalogo` | Catalog | Coming soon |
| `/producto/:slug` | Product detail | Pending |
| `/carrito` | Cart | Pending |
| `/checkout` | Checkout | Pending |
| `/cuenta` | Account | Pending |
| `/login` | Login | Pending |
| `/register` | Register | Pending |
| `*` | 404 | Done |

---

## Deployment

Frontend is deployed on **Vercel**.
Set all `VITE_*` environment variables in the Vercel project settings.

### URL of the proyect: [www.rodynafarmacias.com.ar](www.rodynafarmacias.com.ar)