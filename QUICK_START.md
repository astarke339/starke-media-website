# Quick Start Guide - Starke Media Website

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

### Option 2: CLI Deployment

```bash
npm install -g vercel
vercel login
vercel
```

## Key Features to Test

✅ **Hero Section**
- Smooth scroll to Portfolio and Contact sections
- Animated text entrance on page load
- Responsive design on mobile

✅ **Stats Section**
- Counter animations trigger when scrolling into view
- Hover effects on stat cards

✅ **Portfolio Section**
- Bento grid layout (asymmetric on desktop)
- Hover effects with scale and bronze glow
- Responsive stacking on mobile

✅ **Services Section**
- Icon animations on hover
- Card lift effect

✅ **Process Section**
- Timeline with numbered steps
- Bronze connecting line on desktop

✅ **About Section**
- Two-column layout (stacks on mobile)
- Instagram link to @iamstarke

✅ **Pricing Section**
- Three pricing tiers
- "Growth Package" highlighted
- Smooth scroll to contact on CTA click

✅ **Contact Section**
- Working contact form (opens mailto link)
- Direct email link
- Form validation

✅ **Footer**
- Social links (Instagram, Email)
- Copyright notice

## Customization Quick Reference

### Change Email Address
1. `components/Contact.tsx` - Line with `austin@starkemedia.com`
2. `components/Footer.tsx` - Same email link

### Change Instagram Handle
1. `components/About.tsx` - Link to `@iamstarke`
2. `components/Footer.tsx` - Instagram link

### Update Portfolio Items
Edit the `portfolioItems` array in `components/Portfolio.tsx`

### Update Pricing
Edit the `tiers` array in `components/Pricing.tsx`

### Change Stats
Edit the `stats` array in `components/Stats.tsx`

### Modify Colors
All colors are defined in `tailwind.config.ts` under the `colors` section

## Performance Checklist

✅ All images use Next.js Image optimization
✅ Fonts are optimized with next/font
✅ Code splitting enabled by default
✅ Smooth scroll animations
✅ Responsive breakpoints for all devices
✅ Semantic HTML for accessibility
✅ ARIA labels where needed

## Browser Testing

Test the site in:
- Chrome/Edge (desktop & mobile)
- Safari (desktop & iOS)
- Firefox (desktop & mobile)

## SEO Checklist

✅ Meta title and description in `app/layout.tsx`
✅ Semantic HTML structure
✅ Alt text for images (placeholder images in portfolio)
✅ robots.txt file
✅ Mobile-friendly design

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution:** Ensure you have internet connection during first build for Google Fonts download

### Issue: Animations not working
**Solution:** Check that JavaScript is enabled and browser supports CSS animations

### Issue: Contact form not working
**Solution:** The form uses mailto link - ensure user has email client configured

### Issue: Images not loading
**Solution:** Check that placeholder URLs from placehold.co are accessible

## Next Steps

1. **Replace placeholder images** in Portfolio section with real client work
2. **Add actual photo** in About section
3. **Update email address** throughout if different from austin@starkemedia.com
4. **Configure custom domain** in Vercel settings
5. **Add Google Analytics** (optional)
6. **Set up actual form backend** like Formspree or EmailJS if desired

## Support

For issues or questions:
- Check the main README.md
- Review component files for inline comments
- Contact: austin@starkemedia.com

---

**Ready to launch?** Just run `npm run build` and deploy to Vercel!


