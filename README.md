# Starke Media - Premium Automotive Content Agency

A luxury, dark-themed website for Starke Media, an automotive content and marketing agency founded by Austin Starke in Michigan.

## Features

- 🎨 **Dark Luxury Aesthetic** - Inspired by high-end watch brands like Rolex
- 🎬 **Cinematic Design** - Film production meets automotive excellence
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Beautiful on all devices
- 🚀 **Optimized Performance** - Built with Next.js 14+ App Router
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Fonts:** Playfair Display, Montserrat, JetBrains Mono

## Color Palette

```css
--luxury-green-darkest: #0A2F2F  /* Main backgrounds */
--luxury-green-dark: #0D3D3D     /* Secondary backgrounds */
--luxury-green: #1B4D4D          /* Accents */
--bronze-dark: #8B6F47           /* Highlights */
--bronze: #B8935C                /* Primary CTAs */
--gold-light: #D4AF77            /* Hover effects */
--black: #000000                 /* Pure black */
--white: #FAFAFA                 /* Off-white text */
--gray-dark: #1A1A1A             /* Cards */
--gray-medium: #4A4A4A           /* Secondary text */
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
/app
  /page.tsx          # Main landing page
  /layout.tsx        # Root layout with fonts and metadata
  /globals.css       # Global styles and Tailwind config
/components
  /Hero.tsx          # Hero section with CTAs
  /Stats.tsx         # Statistics with counter animations
  /Portfolio.tsx     # Work showcase with bento grid
  /Services.tsx      # Service offerings
  /Process.tsx       # 4-step timeline
  /About.tsx         # Founder story
  /Pricing.tsx       # Pricing tiers
  /Contact.tsx       # Contact form
  /Footer.tsx        # Footer with social links
```

## Sections

1. **Hero** - Full-screen introduction with smooth scroll CTAs
2. **Stats** - Data-driven results with animated counters
3. **Portfolio** - Bento grid showcase of client work
4. **Services** - Three core offerings with hover effects
5. **Process** - Four-step timeline with visual indicators
6. **About** - Founder story and credentials
7. **Pricing** - Three-tier pricing structure
8. **Contact** - Contact form and direct email link
9. **Footer** - Social links and copyright

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:

```bash
npm run build
```

The `out` directory contains the static files ready for deployment.

## Customization

### Update Content

- **Hero Text:** Edit `components/Hero.tsx`
- **Stats:** Modify the `stats` array in `components/Stats.tsx`
- **Portfolio Items:** Update `portfolioItems` in `components/Portfolio.tsx`
- **Pricing Tiers:** Adjust `tiers` in `components/Pricing.tsx`
- **Contact Email:** Change email in `components/Contact.tsx` and `components/Footer.tsx`

### Update Colors

Edit the color variables in `tailwind.config.ts`:

```typescript
colors: {
  'luxury-green-darkest': '#0A2F2F',
  'bronze': '#B8935C',
  // ... etc
}
```

### Update Fonts

Modify the font imports in `app/layout.tsx` to use different Google Fonts.

## Performance Optimizations

- ✅ Next.js automatic code splitting
- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ Lazy loading for animations
- ✅ CSS purging with Tailwind

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## License

© 2024 Starke Media. All rights reserved.

## Contact

**Austin Starke**
- Email: austin@starkemedia.com
- Instagram: [@iamstarke](https://instagram.com/iamstarke)
- Based in Michigan

---

Built with precision. Designed for impact.


