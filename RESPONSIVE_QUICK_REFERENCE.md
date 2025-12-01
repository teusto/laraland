# Quick Reference: Mobile Responsive Adjustments

## Quick Breakpoint Reference

```scss
1024px  = Tablets (iPad, Android tablets)
768px   = Small tablets / Large phones (landscape)
480px   = Phones (portrait)
360px   = Small phones (iPhone SE, older Android)
```

---

## Most Common Adjustments by File

### `hero.module.scss`
```scss
Line ~104: Tablet breakpoint
Line ~153: Mobile landscape
Line ~207: Mobile portrait
Line ~267: Extra small
```

### `cards.module.scss`
```scss
Line ~155: Tablet breakpoint
Line ~217: Mobile landscape (100% width cards)
Line ~288: Mobile portrait
Line ~354: Extra small
```

### `options.module.scss`
```scss
Line ~59:  Tablet breakpoint
Line ~81:  Mobile landscape (column layout)
Line ~117: Mobile portrait
Line ~142: Extra small
```

### `contacts.module.scss`
```scss
Line ~87:  Tablet breakpoint
Line ~116: Mobile landscape (vertical stack)
Line ~160: Mobile portrait
Line ~203: Extra small
```

### `intro.module.scss`
```scss
Line ~73:  Tablet breakpoint
Line ~100: Mobile landscape (CTA becomes static)
Line ~133: Mobile portrait
Line ~166: Extra small
```

### `about.module.scss`
```scss
Line ~98:  Tablet breakpoint
Line ~131: Mobile landscape (reduced scroll height)
Line ~167: Mobile portrait
Line ~205: Extra small
```

### `faq.module.scss`
```scss
Line ~77:  Tablet breakpoint
Line ~111: Mobile landscape (column layout)
Line ~152: Mobile portrait
Line ~189: Extra small
```

### `explanation.module.scss`
```scss
Line ~56:  Tablet breakpoint (3 per row)
Line ~83:  Mobile landscape (2 per row)
Line ~111: Mobile portrait (column layout)
Line ~143: Extra small
```

### `text.module.scss`
```scss
Line ~34:  Tablet breakpoint
Line ~50:  Mobile landscape
Line ~68:  Mobile portrait
Line ~88:  Extra small
```

### `footer.module.scss`
```scss
Line ~23:  Mobile portrait
Line ~34:  Extra small
```

### `index.module.scss` (Layout)
```scss
Line ~47:  Tablet breakpoint (padding adjustments)
Line ~66:  Mobile landscape
Line ~87:  Mobile portrait (minimal padding)
Line ~115: Extra small
```

---

## Common Tweaks

### Make text bigger on phones
```scss
@media (max-width: 480px) {
  h1 { font-size: 2.5rem; } // Increase from 2.2rem
  p  { font-size: 0.9rem; } // Increase from 0.8rem
}
```

### Increase touch targets
```scss
@media (max-width: 768px) {
  button {
    padding: 1rem 1.5rem; // Bigger padding
    min-height: 48px;      // Apple guidelines
  }
}
```

### More/less white space
```scss
@media (max-width: 480px) {
  .wrapper {
    padding: 2rem;   // Increase
    gap: 1.5rem;     // Increase
  }
}
```

### Adjust container widths
```scss
@media (max-width: 768px) {
  .container {
    width: 95%;  // Make wider (or 85% for narrower)
  }
}
```

---

## Emergency Fixes

### Fix horizontal scroll
Add to main App or body styles:
```scss
body {
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  box-sizing: border-box;
}
```

### Fix overlapping elements
```scss
@media (max-width: 480px) {
  .element {
    position: relative; // Change from absolute/fixed
    z-index: 10;       // Adjust stacking
  }
}
```

### Video not scaling
```scss
@media (max-width: 480px) {
  video {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
  }
}
```

---

## Testing in Browser

### Chrome DevTools
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Select device or enter custom dimensions
3. Test both portrait and landscape

### Responsive Design Mode (Firefox)
1. F12 → Responsive Design Mode (Ctrl+Shift+M)
2. Choose preset or custom size
3. Test touch events

### Safari Developer Tools
1. Develop → Enter Responsive Design Mode
2. Select iOS device
3. Test actual device features

---

## Key Design Decisions

| Element | Desktop | Mobile | Reason |
|---------|---------|--------|--------|
| Cards | 2 per row | 1 per row | Readability |
| Options | 4 per row | Column | Touch targets |
| Text width | 60-70% | 90-95% | Screen usage |
| Padding | 2rem | 1-1.25rem | Space efficiency |
| Border radius | 18px | 12px | Proportion |
| CTA position | Absolute | Static | Accessibility |
| Blur effects | Active | Disabled | Performance |

---

## Device Preview Shortcuts

```bash
# Common device dimensions (width × height)
iPhone SE:        375 × 667
iPhone 12:        390 × 844
iPhone 14 Pro:    393 × 852
iPhone 14 Pro Max: 430 × 932
iPad Mini:        768 × 1024
iPad Pro:         1024 × 1366
```

---

## Pro Tips

1. **Always test in actual devices** when possible
2. **Check landscape AND portrait** orientations
3. **Test touch interactions** not just visuals
4. **Verify text is readable** without zooming
5. **Ensure CTAs are easy to tap** (min 44×44px)

---

Last updated: December 2025
