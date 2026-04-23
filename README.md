# Aymen Khaled - Freelancer Portfolio

Client-focused portfolio for freelance AI SaaS, automation, and full-stack projects.

## Local setup

```bash
npm install
npm run dev
npm run build
```

## Profile source

Primary content lives in:

```text
src/data/portfolio.ts
```

Use `public/pic.png` as the official profile image.

## Calendly

The booking section embeds:

```text
https://calendly.com/khaledaymen850
```

The app accepts both the base scheduling URL and future event URLs such as `/30min`. If an event URL gives 404, create and publish that event in Calendly, then copy the exact share link.

## Vercel Analytics

The app includes `@vercel/analytics/next`. Enable Web Analytics in the Vercel dashboard for this project, then redeploy.

## Quality checks

Before publishing, verify there are no placeholder testimonials, broken images, old stats, or missing contact links.
