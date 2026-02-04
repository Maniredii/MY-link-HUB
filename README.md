# Personal Link Hub

A clean, responsive website for storing and sharing your personal links - similar to Linktree but fully customizable and self-hosted.

## Features

- 📱 Fully responsive design
- 🎨 Modern gradient background with glassmorphism effects
- 🔗 Organized link categories (Social, Projects, Contact)
- ✨ Smooth animations and hover effects
- 🎯 Click tracking and analytics ready
- ⚡ Fast loading and lightweight
- 🛠️ Easy to customize

## Quick Setup

1. **Customize Your Information:**
   - Edit `index.html` to update your name, bio, and links
   - Replace the placeholder profile image URL
   - Update email and contact information

2. **Add Your Links:**
   - Replace the `#` placeholders with your actual URLs
   - Add or remove link items as needed
   - Choose appropriate Font Awesome icons

3. **Customize Styling:**
   - Modify colors in `style.css`
   - Adjust the gradient background
   - Change fonts or spacing

4. **Deploy:**
   - Upload files to any web hosting service
   - Works with GitHub Pages, Netlify, Vercel, etc.

## Customization Guide

### Adding New Links

```html
<a href="your-url-here" class="link-item project">
    <i class="fas fa-your-icon"></i>
    <span>Link Title</span>
    <i class="fas fa-external-link-alt"></i>
</a>
```

### Link Categories

- `social` - Blue theme for social media
- `project` - Green theme for projects/portfolio
- `contact` - Orange theme for contact methods

### Profile Image

Replace the placeholder URL in the img src:
```html
<img src="path-to-your-image.jpg" alt="Profile" id="profileImg">
```

### Colors

Main colors are defined in CSS variables. Key colors:
- Primary: `#4f46e5` (Indigo)
- Social: `#3b82f6` (Blue)
- Projects: `#10b981` (Green)
- Contact: `#f59e0b` (Orange)

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # Interactive features
└── README.md       # This file
```

## Deployment Options

### GitHub Pages (Free)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel (Free)
1. Import your GitHub repository
2. Automatic deployments
3. Excellent performance optimization

### Traditional Web Hosting
Upload all files to your web hosting provider's public folder.

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers

## License

Free to use and modify for personal projects.

---

**Pro Tip:** You can easily add Google Analytics, track clicks, or integrate with other services by modifying the `script.js` file.