# Saloon Website

This is a premium, corporate Next.js project built with the App Router and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main pages and layouts.
  - `page.tsx`: Home page with Hero and Services sections.
  - `about/page.tsx`: About page with mission and vision.
  - `contact/page.tsx`: Contact page with form and info.
  - `privacy/page.tsx`: Privacy policy placeholder.
  - `terms/page.tsx`: Terms of service placeholder.
- `components/`: Reusable UI components.
  - `Navbar.tsx`: Responsive navigation bar.
  - `Footer.tsx`: Clean corporate footer.
- `styles/`: Global styles (located in `app/globals.css`).

## Environment Variables

The project uses `.env.local` for configuration:

- `NEXT_PUBLIC_SITE_NAME`: The name displayed in the Navbar and Page Title.
- `NEXT_PUBLIC_CONTACT_EMAIL`: The email displayed on the Contact page.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)
