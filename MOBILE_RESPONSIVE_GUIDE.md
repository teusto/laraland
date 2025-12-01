# Mobile Responsive Design Guide

## Overview
This document outlines the mobile-first responsive design implementation for the Lara Lensdorf Wellness Hub website. All responsive styles are organized using media queries without affecting the desktop experience.

---

## Breakpoints

The website uses the following standard breakpoints:

```scss
// Tablet (portrait and landscape)
@media (max-width: 1024px) { ... }

// Mobile (landscape)
@media (max-width: 768px) { ... }

// Mobile (portrait - phones)
@media (max-width: 480px) { ... }

// Extra small devices
@media (max-width: 360px) { ... }
```

---

## Sections Covered

### 1. **Hero Section** (`hero.module.scss`)
- **Tablet (1024px):**
  - Reduced spacing and logo/navbar sizes
  - H1: 4rem, CTA: 12rem width
  
- **Mobile Landscape (768px):**
  - Navbar wraps, centered CTA button
  - H1: 3rem, better text width (80%)
  
- **Mobile Portrait (480px):**
  - H1: 2.2rem, CTA becomes static/centered
  - Full-width layout adjustments
  - Border radius reduced to 12px
  
- **Extra Small (360px):**
  - H1: 1.8rem, minimal spacing

**Key Features:**
- Fixed positioning maintained for logo/navbar
- Smooth scaling of typography
- CTA repositions from absolute to static on mobile

---

### 2. **Cards Section** (`cards.module.scss`)
- **Tablet (1024px):**
  - 2 cards per row (45% width each)
  - Consistent sizing for regular and wrapper cards
  
- **Mobile Landscape (768px):**
  - Single column layout (100% width)
  - Auto height with min-height constraints
  - Video height: 250px
  
- **Mobile Portrait (480px):**
  - Reduced padding and border radius
  - Card min-height: 350px
  - Video height: 220px
  
- **Extra Small (360px):**
  - Further reduced typography
  - Card min-height: 320px, Video: 200px

**Key Features:**
- `!important` used to override nth-child selectors on mobile
- Split cards (card_wrapper) maintain structure
- Videos remain properly sized and centered

---

### 3. **Options Section** (`options.module.scss`)
- **Tablet (1024px):**
  - 4 items in a row with reduced spacing
  
- **Mobile Landscape (768px):**
  - **Vertical stack** (flex-direction: column)
  - Blur effect disabled on mobile
  - Min-height: 180px per item
  
- **Mobile Portrait (480px):**
  - Min-height: 160px
  - Border radius: 12px
  
- **Extra Small (360px):**
  - Min-height: 140px

**Key Features:**
- Blur hover effect disabled for better mobile UX
- Aspect ratio removed for flexible height
- Full-width items for better touch targets

---

### 4. **Contacts Section** (`contacts.module.scss`)
- **Tablet (1024px):**
  - Slight size adjustments
  
- **Mobile Landscape (768px):**
  - Content stacks vertically
  - CTA button full-width
  - Centered social icons
  
- **Mobile Portrait (480px):**
  - Compact padding
  - Border radius: 12px
  
- **Extra Small (360px):**
  - Minimal spacing

**Key Features:**
- Flex-direction changes to column
- Text-align: center for better readability
- Full-width CTA for easy tapping

---

### 5. **Intro Section** (`intro.module.scss`)
- **Tablet (1024px):**
  - Width: 85%
  
- **Mobile Landscape (768px):**
  - CTA repositioned from absolute to static
  - Full-width CTA, centered text
  
- **Mobile Portrait (480px):**
  - Width: 95%
  - Compact padding, border radius: 12px
  
- **Extra Small (360px):**
  - Minimal typography

**Key Features:**
- CTA moves from absolute positioning to document flow
- Video maintains aspect ratio
- Extra bottom padding to accommodate static CTA

---

### 6. **About Section** (`about.module.scss`)
- **Tablet (1024px):**
  - Final section stacks vertically
  - Title: 4.5rem
  
- **Mobile Landscape (768px):**
  - Reduced scroll height (400vh → 350vh)
  - Text width increased to 60%
  - Full-width CTA
  
- **Mobile Portrait (480px):**
  - Title: 2.5rem, wraps text
  - Text width: 80%
  - Min-height: 350vh
  
- **Extra Small (360px):**
  - Title: 2rem
  - Min-height: 320vh

**Key Features:**
- Scroll-based animations maintained
- Fixed positioning preserved
- Text sizes scale dramatically for readability

---

### 7. **FAQ Section** (`faq.module.scss`)
- **Tablet (1024px):**
  - Width: 85%, reduced gaps
  
- **Mobile Landscape (768px):**
  - **Two-column layout becomes single column**
  - Left/right sections stack vertically
  - Border radius adjustments
  
- **Mobile Portrait (480px):**
  - Width: 95%
  - Compact padding: 1.25rem
  
- **Extra Small (360px):**
  - Title: 1.2rem
  - Minimal padding: 1rem

**Key Features:**
- Left/right split becomes top/bottom
- Border radius intelligently adjusted for stacking
- Navigation items remain interactive

---

## Best Practices Implemented

### 1. **Non-Destructive Approach**
- All responsive styles use media queries
- Desktop styles remain completely untouched
- Easy to debug and maintain

### 2. **Touch-Friendly Design**
- Minimum touch target: 44px × 44px
- Increased padding on interactive elements
- Disabled complex hover effects on mobile

### 3. **Typography Scaling**
```scss
// Example progression
Desktop: 3rem
Tablet: 2.5rem
Mobile Landscape: 2rem
Mobile Portrait: 1.8rem
Extra Small: 1.5rem
```

### 4. **Layout Patterns**
- **Desktop:** Multi-column, fixed positioning
- **Tablet:** Fewer columns, maintained structure
- **Mobile:** Single column, stacked layouts
- **Touch:** Full-width interactive elements

### 5. **Performance Considerations**
- No JavaScript changes required
- CSS-only responsive design
- Hardware-accelerated transforms maintained
- Video elements properly constrained

---

## How to Make Future Adjustments

### Adjusting Breakpoints
Edit the `@media` queries at the bottom of each `.module.scss` file:

```scss
// Example: Make tablets more like desktop
@media (max-width: 1024px) {
  .element {
    // Reduce changes here
  }
}
```

### Adding New Breakpoints
Add between existing breakpoints:

```scss
// Large tablets
@media (max-width: 900px) {
  // Custom styles
}
```

### Typography Tweaking
Look for font-size declarations in each breakpoint and adjust proportionally:

```scss
@media (max-width: 480px) {
  h1 {
    font-size: 2.2rem; // Increase/decrease as needed
  }
}
```

### Spacing Adjustments
Search for `padding`, `gap`, and `margin` in media queries:

```scss
@media (max-width: 480px) {
  .card {
    padding: 1.25rem; // Adjust spacing
    gap: 1rem;
  }
}
```

### Width Adjustments
Modify wrapper widths at each breakpoint:

```scss
@media (max-width: 768px) {
  .wrapper {
    width: 90%; // Adjust from 85-95%
  }
}
```

---

## Testing Checklist

### Device Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 12 Pro Max (428px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] Samsung Galaxy Tab (800px)

### Browser Testing
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Firefox (Mobile)
- [ ] Samsung Internet

### Orientation Testing
- [ ] Portrait mode
- [ ] Landscape mode

### Feature Testing
- [ ] Touch interactions work
- [ ] Videos load and play
- [ ] Links are tappable
- [ ] Forms (if any) are usable
- [ ] Animations don't break
- [ ] Scroll behavior is smooth

---

## Common Issues & Solutions

### Issue: Text too small on mobile
**Solution:** Increase font-size in the appropriate media query.

### Issue: Elements overlapping
**Solution:** Check z-index values and position properties. Add more padding/margin in mobile queries.

### Issue: Horizontal scroll appears
**Solution:** 
```scss
* {
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
```

### Issue: Click targets too small
**Solution:** Increase padding on buttons/links in mobile queries (minimum 44px × 44px).

### Issue: Fixed elements not visible
**Solution:** Adjust top/bottom/left/right values in media queries.

---

## File Structure

```
src/sections/styles/
├── hero.module.scss         ✅ Responsive
├── cards.module.scss         ✅ Responsive
├── options.module.scss       ✅ Responsive
├── contacts.module.scss      ✅ Responsive
├── intro.module.scss         ✅ Responsive
├── about.module.scss         ✅ Responsive
├── faq.module.scss           ✅ Responsive
├── explanation.module.scss   ✅ Responsive
├── text.module.scss          ✅ Responsive
└── footer.module.scss        ✅ Responsive

src/routes/styles/
└── index.module.scss         ✅ Responsive (Layout padding)
```

---

## Notes

- All media queries are at the **bottom** of each SCSS file
- Comments clearly mark responsive sections
- Desktop code remains at the top, untouched
- Uses standard breakpoint values for consistency
- Mobile-first approach: start with mobile, enhance for desktop

---

## Credits

Responsive design implementation completed: December 2025
Framework: React + TypeScript + SCSS Modules
Approach: CSS-only, progressive enhancement
