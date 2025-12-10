# United Stone Marble

A modern, multilingual website for United Stone Marble built with Next.js, Sanity CMS, and Tailwind CSS.

## Features

- **Multilingual Support**: English and Arabic versions
- **CMS Integration**: Powered by Sanity for content management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for interactive elements
- **SEO Optimized**: Next.js with sitemap generation
- **Contact Forms**: Integrated email functionality with Resend

## Tech Stack

- **Framework**: Next.js 16
- **CMS**: Sanity
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Email**: Resend
- **Fonts**: Geist (optimized by Next.js)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `app/` - Next.js app router pages
- `components/` - Reusable React components
- `sanity/` - Sanity CMS configuration and schemas
- `services/` - API service functions
- `public/` - Static assets

## Environment Setup

Create a `.env.local` file with your Sanity and Resend credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
RESEND_API_KEY=your_resend_key
```

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
