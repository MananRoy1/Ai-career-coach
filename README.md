# Sensei

A modern career assistant web application built with Next.js, Prisma, Clerk, and Google Generative AI. Sensei helps users generate AI-powered cover letters, build resumes, practice interviews, and manage their career journey.

## Features

- **AI Cover Letter Generator**: Generate professional cover letters tailored to job descriptions using Google Gemini AI.
- **Resume Builder**: Create, edit, and manage resumes with an intuitive builder.
- **Interview Practice**: Take mock interviews and receive performance analytics.
- **Onboarding**: Personalized onboarding to capture user background and preferences.
- **User Authentication**: Secure sign-up/sign-in with Clerk.
- **Dashboard**: Centralized view of all your career tools and progress.

## Technologies Used

- [Next.js 15 (App Router)](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Clerk](https://clerk.com/) (Authentication)
- [Google Generative AI (Gemini)](https://ai.google.dev/)
- [Lucide React](https://lucide.dev/)
- [Zod](https://zod.dev/) (Validation)
- [React Hook Form](https://react-hook-form.com/)
- [Sonner](https://sonner.emilkowal.ski/) (Notifications)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- PostgreSQL database
- Google Gemini API key
- Clerk account (for authentication)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd SENSEI/sensei
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `sensei` directory with the following variables:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db_name>
GEMINI_API_KEY=your_google_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

> **Note:** Replace the placeholders with your actual credentials.

### 4. Set Up the Database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate deploy
```

(Optional) To generate the Prisma client:

```bash
npx prisma generate
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sensei/
  actions/           # Server actions (cover letter, resume, user, etc.)
  app/               # Next.js app directory (routes, pages, API, components)
    (auth)/          # Authentication pages (sign-in, sign-up)
    (main)/          # Main app features (dashboard, ai-cover-letter, resume, interview, onboarding)
    api/             # API routes
    lib/             # Helpers, schema, Prisma client
    public/          # Static assets
    components/      # Shared UI components
    data/            # Static data (FAQs, features, testimonials)
    hooks/           # Custom React hooks
    prisma/          # Prisma schema and migrations
```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `GEMINI_API_KEY`: Google Gemini API key for AI cover letter generation
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key

## Deployment

You can deploy this app to Vercel, Railway, or any platform that supports Next.js and PostgreSQL. Make sure to set all required environment variables in your deployment environment.

## License

MIT

---

**Sensei** — Your AI-powered career assistant.
