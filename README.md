# Guest Australia — guestaustralia.com

Professional Australia travel planning and itinerary service built with Next.js 14, Tailwind CSS, and TypeScript. Replaces the previous WordPress site.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Forms:** React Hook Form
- **Deployment:** Railway

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Site Structure

```
/                           Home page
/travel-planning            Travel planning services + contact form
/itineraries                Itineraries index
/itineraries/lifestyle      Lifestyle holidays (4 itineraries)
/itineraries/family         Family holidays (4 itineraries)
/itineraries/honeymoon      Honeymoon packages (4 itineraries)
/itineraries/australia-nz   Australia & NZ combined (4 itineraries)
/travel-information         Travel info index
/travel-information/travel-tips      Travel tips
/travel-information/places-australia Australian destinations
/blog                       Blog index
/blog/[slug]                Individual blog posts (3 posts)
```

## Environment Variables

No environment variables are required for the base site. Railway injects `PORT` automatically.

Future additions:
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` — for contact form email integration

## Railway Deployment

1. Push this repo to GitHub
2. Create a new project in Railway and connect the GitHub repo
3. Railway auto-detects Next.js via Nixpacks — no additional config needed
4. The build command is `npm run build` and start command is `npm start`
5. Railway injects `PORT` automatically

## GoDaddy DNS Configuration

Point `guestaustralia.com` to Railway:

1. In Railway project settings, go to **Settings → Domains**
2. Add custom domain: `guestaustralia.com` and `www.guestaustralia.com`
3. Railway will provide a CNAME target (e.g., `your-project.up.railway.app`)
4. In GoDaddy DNS management:
   - **A Record:** `@` → Railway's IP (if provided)
   - **CNAME:** `www` → `your-project.up.railway.app`
5. Wait for DNS propagation (up to 48 hours)

## Notes

- Contact form currently logs to console — email integration to be added
- Blog post content is placeholder — replace in `src/data/blog.ts`
- Itinerary content uses generated placeholder text — replace in `src/data/itineraries.ts`
- Images use placeholder styling — replace with real images when available
