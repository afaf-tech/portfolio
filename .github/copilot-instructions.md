# Portfolio Website - AI Developer Instructions

This is a **static portfolio website** built with vanilla HTML, CSS, and JavaScript. No build system, frameworks, or dependencies - designed for simplicity and direct deployment to GitHub Pages.

## Architecture Overview

- **Two-page structure**: `index.html` (main portfolio) and `portfolio.html` (projects showcase)
- **Styling**: Tailwind CSS via CDN + custom styles in `css/styles.css`
- **JavaScript**: Vanilla JS in `js/main.js` handling theme toggle and mobile menu
- **Assets**: Images in `img/` directory (favicon, logo, profile photo)

## Key Patterns

### Theme System
Uses Tailwind's `dark:` classes with system preference detection:
```javascript
// Respects system preference, stores user choice in localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}
```

### Responsive Navigation
- Desktop: horizontal nav with anchor links to sections
- Mobile: hamburger menu with icon animation (menu ↔ X)
- Both pages share identical nav structure but different link handling

### Content Structure
- **Sections**: Each major section has an ID for anchor navigation (`#home`, `#experience`, etc.)
- **Grid layouts**: Uses Tailwind's responsive grid (`grid-cols-1 md:grid-cols-2`)
- **Container pattern**: Consistent `container mx-auto px-4` wrapper

## Development Workflows

### Making Content Changes
1. Edit HTML directly in `index.html` or `portfolio.html`
2. Personal info, experience, skills are hardcoded in HTML
3. No build process - changes are immediately live

### Styling Updates
1. Use Tailwind classes for most styling
2. Custom CSS in `css/styles.css` only for transitions and mobile-specific styles
3. Tailwind config is inline in HTML `<script>` tags (both files)

### Adding New Sections
Copy existing section structure and modify:
```html
<section id="new-section" class="py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Content here -->
        </div>
    </div>
</section>
```

## Project-Specific Conventions

- **Color scheme**: Primary (#0f172a), Secondary (#64748b) defined in Tailwind config
- **Spacing**: Consistent `py-20` for section padding, `space-y-*` for vertical spacing
- **Icons**: Inline SVG with Tailwind classes, no icon libraries
- **Images**: All assets in `img/` with semantic naming (favicon.svg, logo.png, profile.jpeg)

## Deployment Notes
- **GitHub Pages ready**: No build required, deploy directly from repository
- **SEO considerations**: Semantic HTML structure, meta tags in `<head>`
- **Performance**: Minimal JavaScript, CDN resources, optimized for fast loading
- **Browser support**: Modern browsers only (uses CSS Grid, dark mode, backdrop-blur)

## File Responsibilities
- `index.html`: Main portfolio with all sections (home, experience, skills, education, contact)
- `portfolio.html`: Dedicated projects showcase page
- `js/main.js`: Theme toggle + mobile menu (shared functionality)
- `css/styles.css`: Minimal custom styles (smooth scroll, transitions)
- `src/app/layout.tsx`: Empty file (possibly leftover from different project setup)