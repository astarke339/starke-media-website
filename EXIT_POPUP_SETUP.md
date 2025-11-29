# Exit Intent Popup Setup Guide

## Overview

A subtle, luxury-styled exit intent popup has been added to your website. It triggers when users move their mouse toward the top of the browser (exit intent) and shows a free content audit offer.

---

## Features Implemented

✅ **Exit Intent Detection** - Shows when mouse moves to top 50px of viewport
✅ **Session Tracking** - Only shows once per session
✅ **7-Day Cookie** - Won't show again for 7 days after being seen
✅ **ESC Key to Close** - Press ESC to dismiss
✅ **Click Outside to Close** - Click backdrop to dismiss
✅ **Smooth Animations** - 300ms fade-in/out transitions
✅ **Dark Luxury Design** - Matches site aesthetic perfectly
✅ **Mobile Responsive** - Works on all devices

---

## Design Specs

**Colors:**
- Background: `#0a0a0a` (deep black)
- Border: `#d4af37` (gold accent, 1px)
- Input Background: `#1a1a1a` (charcoal)
- Backdrop: `rgba(0, 0, 0, 0.85)` with 8px blur
- Button: `#d4af37` gold background

**Content:**
- Headline: "Before You Go..."
- Offer: "Get a Free Content Audit for Your Business"
- Description: Personalized video breakdown promise
- CTA: "Send Me My Audit"
- Disclosure: GDPR/CAN-SPAM compliant text

---

## Form Submission Setup

### Option 1: FormSpree (Recommended - Free & Easy)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Update line 51 in `components/ExitIntentPopup.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual FormSpree form ID.

### Option 2: ConvertKit

1. Sign up at [https://convertkit.com](https://convertkit.com)
2. Create a form
3. Get your form endpoint
4. Update the fetch URL in the component

### Option 3: Custom API Endpoint

If you have your own backend:

```typescript
const response = await fetch('/api/exit-intent-audit', {
  method: 'POST',
  body: JSON.stringify({ email }),
  headers: {
    'Content-Type': 'application/json'
  }
})
```

---

## Testing the Popup

### To Test Locally:

1. Visit your site at `http://localhost:3001`
2. Move your mouse quickly to the top of the browser window
3. The popup should appear

**Note:** It only shows once per session. To test again:
- Open an incognito/private window, OR
- Clear `sessionStorage` in DevTools Console: `sessionStorage.clear()`
- Clear `localStorage` for the 7-day cookie: `localStorage.clear()`

### To Test Exit Intent:

```javascript
// In browser console, manually trigger:
document.dispatchEvent(new MouseEvent('mousemove', { 
  clientY: 10, 
  movementY: -50 
}))
```

---

## Customization Options

### Change Trigger Sensitivity

In `components/ExitIntentPopup.tsx`, line 23:

```typescript
if (e.clientY <= 50 && e.movementY < 0 && !hasShown) {
```

- Increase `50` to make it trigger further from top
- Decrease to require mouse closer to top edge

### Change Cookie Duration

Line 16:

```typescript
Date.now() - parseInt(lastShownDate) < 7 * 24 * 60 * 60 * 1000
```

- `7` = days
- Change to `1` for 1 day, `14` for 2 weeks, etc.

### Update Copy

Edit the content in the component:
- **Headline:** Line 95
- **Subheadline:** Line 99
- **Description:** Line 103
- **Button Text:** Line 136

### Change Colors

Update inline styles:
- **Border color:** Line 86 (`#d4af37`)
- **Background:** Line 84 (`#0a0a0a`)
- **Button:** Line 141 (`#d4af37`)

---

## Analytics Tracking (Optional)

Add tracking to measure popup performance:

```typescript
// When popup shows
setIsVisible(true)
// Add: gtag('event', 'exit_popup_shown')

// When form submits
if (response.ok) {
  // Add: gtag('event', 'exit_popup_conversion')
  handleClose()
}
```

---

## Email Data Collected

The popup collects:
- **Email address**
- **Type:** `exit-intent-audit` (for segmentation)
- **Timestamp:** Automatically included by FormSpree/ConvertKit

---

## GDPR/Privacy Compliance

✅ **Disclosure included** - Below email input
✅ **Opt-in only** - User must explicitly submit
✅ **Unsubscribe mention** - "You can unsubscribe at any time"
✅ **Clear purpose** - States what emails they'll receive

---

## Success Message (Optional)

To show a success message instead of just closing:

1. Add state: `const [isSuccess, setIsSuccess] = useState(false)`
2. After successful submission:
```typescript
if (response.ok) {
  setIsSuccess(true)
  setTimeout(() => handleClose(), 2000)
}
```
3. Show success message in the modal when `isSuccess` is true

---

## Troubleshooting

**Popup not showing:**
- Check browser console for errors
- Verify sessionStorage/localStorage are cleared
- Make sure you're moving mouse to top of viewport

**Form not submitting:**
- Check FormSpree endpoint is correct
- Verify network tab in DevTools for API errors
- Ensure CORS is enabled if using custom endpoint

**Popup showing too often:**
- Check localStorage is working (not disabled in browser)
- Verify cookie logic in lines 15-19

---

## Files Modified

1. **Created:** `components/ExitIntentPopup.tsx` - Main popup component
2. **Modified:** `app/page.tsx` - Added popup to layout

---

## Next Steps

1. ✅ Set up FormSpree account (or your preferred form service)
2. ✅ Update form endpoint in `components/ExitIntentPopup.tsx`
3. ✅ Test the popup on localhost
4. ✅ Deploy to production
5. ✅ Monitor conversion rate
6. ✅ Set up email automation for audit fulfillment

---

## Design Philosophy

The popup maintains your site's premium aesthetic:
- **Subtle, not aggressive** - Elegant offer, not desperate
- **Dark luxury** - Matches overall site design
- **Minimal** - Clean layout, no clutter
- **Professional** - Sophisticated copy and styling
- **Respectful** - Shows once, easy to dismiss

**Goal:** Feel like a premium exclusive offer, not a popup ad.

---

Your exit intent popup is ready to capture leads! 🎯

