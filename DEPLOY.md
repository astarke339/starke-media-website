# Deployment Guide

## Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Replaced placeholder images in Portfolio section with real client work
- [ ] Updated the About section photo placeholder with actual photo
- [ ] Verified all email addresses are correct
- [ ] Tested all sections on mobile and desktop
- [ ] Checked all links work (Instagram, email)
- [ ] Run `npm run build` successfully locally
- [ ] Updated any placeholder content

## Deploy to Vercel (Recommended)

### Why Vercel?
- Built by the creators of Next.js
- Automatic builds and deployments
- Free SSL certificates
- Global CDN
- Zero configuration needed
- Automatic preview deployments for branches

### Step-by-Step Deployment

#### 1. Create a GitHub Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Starke Media website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/starke-media.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Through Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# For production deployment
vercel --prod
```

#### 3. Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., starkemedia.com)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### Expected Build Output

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         90 kB
└ ○ /_not-found                          871 B          85 kB
```

Build time: ~30-60 seconds

## Deploy to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Cloudflare Pages

1. Go to Cloudflare Dashboard
2. Pages → Create a project
3. Connect GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
5. Deploy

### Self-Hosted (Node.js Server)

```bash
# Build the project
npm run build

# Start production server
npm start
```

Server will run on port 3000 by default.

For custom port:
```bash
PORT=8080 npm start
```

## Environment Variables

If you need environment variables:

1. In Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add variables (e.g., `NEXT_PUBLIC_GA_ID` for Google Analytics)

2. Locally:
   - Create `.env.local` file
   - Add your variables
   - Never commit this file (already in .gitignore)

## Post-Deployment

### 1. Test Production Site

- [ ] Visit deployed URL
- [ ] Test all sections load correctly
- [ ] Check mobile responsiveness
- [ ] Test all CTAs and links
- [ ] Verify contact form works
- [ ] Test smooth scrolling
- [ ] Check animations trigger properly

### 2. Set Up Analytics (Optional)

Add Google Analytics or similar:

1. Get tracking ID
2. Add to environment variables
3. Install analytics package
4. Add tracking code to `app/layout.tsx`

### 3. Monitor Performance

- Use Vercel Analytics (built-in)
- Check Core Web Vitals
- Monitor build times
- Review error logs

## Continuous Deployment

Once set up, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

### Branch Deployments

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new section"

# Push to GitHub
git push origin feature/new-section
```

Vercel will automatically create a preview URL for this branch!

## Troubleshooting

### Build Fails

**Issue:** Build fails with dependency errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue:** TypeScript errors
```bash
# Solution: Check TypeScript compilation
npm run build
# Fix any reported errors
```

### Deployment Successful but Site Not Loading

1. Check Vercel deployment logs
2. Verify DNS settings if using custom domain
3. Clear browser cache
4. Check browser console for errors

### Images Not Loading

1. Verify image paths are correct
2. Check next.config.js allows external domains
3. For production images, ensure they're accessible

## Domain Configuration

### Custom Domain DNS Settings

**For root domain (starkemedia.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait 24-48 hours for DNS propagation (usually much faster).

## Performance Optimization

Site should achieve excellent performance:

- **Lighthouse Score:** 90-100
- **First Contentful Paint:** < 1.8s
- **Speed Index:** < 3.4s
- **Time to Interactive:** < 3.8s

Vercel automatically handles:
- Image optimization
- Code splitting
- Edge caching
- Compression

## Support & Help

**Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)

**Common Resources:**
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

**For Issues:**
1. Check deployment logs in Vercel dashboard
2. Review build output for errors
3. Test locally first with `npm run build && npm start`

---

## Quick Deploy Command

```bash
# One-line deploy to Vercel
npx vercel --prod
```

That's it! Your luxury automotive content agency website is now live. 🚀


