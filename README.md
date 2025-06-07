# Modern Portfolio Website

A clean, responsive portfolio website built with HTML, CSS (Tailwind), and vanilla JavaScript. This portfolio is designed to be lightweight, easy to maintain, and deployable directly to GitHub Pages.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive
- 🌓 Dark/Light mode with system preference detection
- 🚀 Fast loading (no frameworks, minimal JavaScript)
- 📝 Easy to customize
- 🔍 SEO-friendly structure

## Customization

### Basic Information

1. Open `index.html` and modify:
   - Your name and role in the Home section
   - Professional experience details
   - Skills and tools
   - Education information
   - Contact links (email, LinkedIn, GitHub)

### Styling

- The site uses Tailwind CSS via CDN for styling
- Custom styles are in `css/styles.css`
- Color scheme and other Tailwind customizations are in the `tailwind.config` section of `index.html`

### Functionality

- Theme toggle and mobile menu functionality are in `js/main.js`
- All JavaScript is vanilla/native (no dependencies)

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to repository Settings > Pages
4. Select your main branch as the source
5. Your site will be published at `https://[username].github.io/[repository-name]`

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## Maintenance

- Keep content up-to-date in `index.html`
- Add new sections by copying and modifying existing section structures
- Maintain clean code formatting for easier updates
- Test responsiveness when making changes

## Browser Support

- Works in all modern browsers
- Supports latest versions of:
  - Chrome
  - Firefox
  - Safari
  - Edge 