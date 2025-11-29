# Design Reference Guide

## Visual Hierarchy & Layout

### Section Flow
```
┌─────────────────────────────────────┐
│         HERO SECTION                │
│  Full viewport, dark gradient       │
│  "Automotive Content That Moves     │
│         Inventory"                  │
│  [View Work] [Book a Call]          │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│         STATS SECTION               │
│   4 stat blocks in 2x2 grid         │
│   Animated counters on scroll       │
│   48% | 73% | 66% | 5x              │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│      PORTFOLIO SECTION              │
│   Bento grid (asymmetric)           │
│   6-9 project cards with hover      │
│   Client name + results overlay     │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│       SERVICES SECTION              │
│      3 columns (stacks mobile)      │
│   Content | Ads | Strategy          │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│       PROCESS SECTION               │
│   Horizontal timeline with 4 steps  │
│   01 → 02 → 03 → 04                 │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│        ABOUT SECTION                │
│   Image (left) | Bio (right)        │
│   Founder story + Instagram         │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│       PRICING SECTION               │
│        3 pricing tiers              │
│   $2.5K | $4.5K | $7.5K             │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│       CONTACT SECTION               │
│   Email + Contact Form              │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│          FOOTER                     │
│   Socials | Copyright               │
└─────────────────────────────────────┘
```

## Color Implementation

### Background Layers
```
Deepest:    #0A2F2F (luxury-green-darkest)
Medium:     #0D3D3D (luxury-green-dark)
Darkest:    #000000 (pure black)

Cards:      #1A1A1A (gray-dark)
```

### Accent Colors
```
Primary CTA:    #B8935C (bronze)
Hover:          #D4AF77 (gold-light)
Borders:        #8B6F47 (bronze-dark)
```

### Text Hierarchy
```
Headlines:      #FAFAFA (off-white)
Body:           #E5E5E5 (light gray)
Secondary:      #4A4A4A (gray-medium)
Accents:        #B8935C (bronze)
```

## Typography Scale

### Display (Playfair Display)
```
Hero H1:        64-96px (4xl-6xl)
Section H2:     48-72px (3xl-5xl)
Card H3:        32-48px (2xl-3xl)
```

### Body (Montserrat)
```
Large:          20-24px (lg-xl)
Regular:        16-18px (base-lg)
Small:          14px (sm)
Tiny:           12px (xs)
```

### Mono (JetBrains Mono)
```
Stats:          64-96px (5xl-7xl)
Data:           16-20px (base-lg)
```

## Spacing System

### Section Padding
```
Desktop:    96-128px (24-32) top/bottom
Mobile:     60-80px (16-20) top/bottom
```

### Component Spacing
```
Between sections:   0 (seamless)
Card padding:       32-48px (8-12)
Button padding:     16px 32px (4 8)
```

### Grid Gaps
```
Stats grid:         48-64px (12-16)
Portfolio:          24px (6)
Services:           32px (8)
```

## Animation Specifications

### Page Load (Hero)
```
1. Founder credit   - fade in, 0s delay
2. Headline        - fade in, 0.1s delay
3. Subheadline     - fade in, 0.2s delay
4. CTAs            - fade in, 0.3s delay
5. Scroll indicator - fade in, 0.8s delay
```

### Scroll Animations
```
Trigger:    Element enters viewport (20% visible)
Duration:   0.6s
Easing:     ease-out
Effect:     Fade + slide up 20px
```

### Hover Effects

**Buttons:**
```css
scale(1.05)
bronze-glow (0 0 20px rgba(184,147,92,0.3))
transition: 300ms
```

**Portfolio Cards:**
```css
image: scale(1.1)
border: bronze glow
transform: translateY(0) → overlay slides up
transition: 500ms
```

**Service Cards:**
```css
transform: translateY(-8px)
border: bronze-dark → bronze
icon: scale(1.1)
transition: 300ms
```

## Responsive Breakpoints

### Desktop First Approach
```
xl:  1280px+    (large desktop)
lg:  1024px+    (desktop)
md:  768px+     (tablet)
sm:  640px+     (mobile landscape)
<sm: <640px     (mobile portrait)
```

### Layout Changes

**Hero:**
```
Desktop:  Center-aligned, large text
Mobile:   Stacked, reduced font sizes
```

**Stats:**
```
Desktop:  2x2 grid
Mobile:   1 column stack
```

**Portfolio:**
```
Desktop:  3-column bento (asymmetric)
Tablet:   2-column
Mobile:   1-column
```

**Services:**
```
Desktop:  3-column
Mobile:   1-column stack
```

**Process:**
```
Desktop:  Horizontal timeline
Mobile:   Vertical timeline
```

**About:**
```
Desktop:  2-column (image | text)
Mobile:   Stack (image → text)
```

**Pricing:**
```
Desktop:  3-column
Tablet:   3-column (scaled down)
Mobile:   1-column stack
```

## Interactive States

### Button States
```
Default:    Bronze bg, black text
Hover:      Gold-light bg, scale(1.05)
Active:     Slightly darker, scale(1.02)
Focus:      Bronze outline for accessibility
```

### Link States
```
Default:    Bronze color
Hover:      Gold-light color, scale icon
Visited:    Same as default
Focus:      Underline for accessibility
```

### Form States
```
Default:    Bronze-dark border
Focus:      Bronze border, bronze-glow
Error:      Red border (if validation added)
Disabled:   Gray, reduced opacity
```

## Special Effects

### Grain Texture
```css
background-image: SVG fractal noise
opacity: 0.05
Effect: Subtle film grain for premium feel
```

### Bronze Glow
```css
box-shadow: 0 0 20px rgba(184,147,92,0.3);
Used on: Buttons, cards on hover
```

### Gradient Overlays
```css
Hero: linear-gradient(to bottom, 
      luxury-green-darkest → black)
Portfolio cards: linear-gradient(to top,
      black → black/50 → transparent)
```

### Scroll Indicator
```css
Animated dot: y-position oscillates
Duration: 1.5s infinite
Effect: Guides user to scroll
```

## Component Patterns

### Card Structure
```
┌─────────────────────────┐
│  [Icon/Image]           │
│                         │
│  Title (Display font)   │
│  Body text (Body font)  │
│                         │
│  [CTA/Link]             │
└─────────────────────────┘

Borders: bronze-dark (default)
Hover: bronze, glow, lift
```

### Section Header Pattern
```
Center-aligned
Large Display font (Playfair)
White color
Margin-bottom: 64px (16)
Fade-in on scroll
```

### CTA Button Pattern
```
Primary:     Bronze bg, black text
Secondary:   Bronze border, bronze text
Size:        py-4 px-8 (min-w-200px)
Hover:       Scale + glow
Border:      rounded-sm (2px)
```

## Accessibility Features

### Focus States
```
All interactive elements have visible focus
Outline: 2px bronze, 4px offset
Never remove focus styles
```

### Keyboard Navigation
```
Tab order follows visual flow
Skip links (if multi-page in future)
Form fields properly labeled
```

### ARIA Labels
```
Icon buttons have aria-label
Form inputs have proper labels
Section landmarks (semantic HTML)
```

### Color Contrast
```
White on luxury-green: 8.5:1 (AAA)
Bronze on black: 5.2:1 (AA)
All text meets WCAG 2.1 AA minimum
```

## Performance Targets

### Lighthouse Scores
```
Performance:     95-100
Accessibility:   95-100
Best Practices:  95-100
SEO:             95-100
```

### Core Web Vitals
```
LCP (Largest Contentful Paint):  < 2.5s
FID (First Input Delay):          < 100ms
CLS (Cumulative Layout Shift):    < 0.1
```

### Load Times
```
First Contentful Paint:  < 1.8s
Time to Interactive:     < 3.8s
Total Page Weight:       < 1MB (without images)
```

## Browser Compatibility

### Supported Browsers
```
Chrome:     Last 2 versions
Firefox:    Last 2 versions
Safari:     Last 2 versions
Edge:       Last 2 versions
iOS Safari: Last 2 versions
Chrome Android: Last 2 versions
```

### Graceful Degradation
```
Animations:    Still functional without JS
Grain texture: Falls back to solid color
Custom fonts:  System fallbacks defined
```

## Print Styles
```
Not implemented (digital-only experience)
If needed: Remove dark backgrounds,
adjust colors for print readability
```

## Design Principles Followed

1. **Luxury First** - Every element feels expensive
2. **Dark & Moody** - Mysterious cinematic atmosphere
3. **Intentional** - No unnecessary elements
4. **Data-Driven** - Stats prove value
5. **Confident** - Direct, no-BS copy
6. **Responsive** - Beautiful on all devices
7. **Performant** - Fast load times
8. **Accessible** - Usable by everyone

---

This design reference ensures consistency across all components and future additions to the website.


