# CSS Rules & Known Issues

## 1. `scrollbar-hide` class is not a standard Tailwind utility

**Issue:** The class `scrollbar-hide` is used in `src/components/home/VideoCarousel.jsx:67` and `src/components/home/Feedback.jsx:101` but is not defined anywhere in the project.

**Why it happens:** `scrollbar-hide` is not a built-in Tailwind CSS utility class. Projects that use it typically either:
- Install the `tailwind-scrollbar-hide` npm plugin
- Define a custom CSS class in `globals.css`

**Current workaround:** Both files add inline styles `scrollbarWidth: 'none'` (Firefox) and `msOverflowStyle: 'none'` (IE/Edge), but these do NOT cover Chrome, Safari, or Opera.

**Fix:** Add the following to `src/app/globals.css`:
```css
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

## 2. Always run `npm run build` after changes

Run `npm run build` (not just `npm run dev`) to catch CSS class typos and missing utilities, since the build process performs the Tailwind JIT scan and will reveal undefined classes.
