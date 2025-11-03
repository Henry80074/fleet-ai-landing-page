# DriveWise AI - Marketing Website

This directory contains the marketing website for DriveWise AI, showcasing our intelligent fleet safety and risk management platform.

## Features Highlighted

### Proprietary IP & Technology
- **Driver Behavior DNA™** - Behavioral fingerprinting across 12+ dimensions
- **Contextual Risk Intelligence™** - Real-time adaptive risk scoring
- **Predictive Incident Forecasting** - 30/60/90-day predictions with 85%+ accuracy
- **Personalized Coaching Engine** - AI-generated driver-specific training
- **Performance Spider Graphs** - Multi-dimensional visual reports
- **Risk Multiplier Discovery** - Dangerous factor combination identification

### Key Metrics
- 40% reduction in incidents
- 30% lower insurance costs
- 24/7 real-time monitoring
- 85%+ prediction accuracy

## File Structure

```
website/
├── index.html          # Main landing page
├── styles.css          # Styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## Key Sections

1. **Hero** - Value proposition and key stats
2. **Features** - Detailed IP and technology showcase
3. **Technology Stack** - ML, APIs, data engineering
4. **Benefits** - Business impact and ROI
5. **Use Cases** - Target industries (logistics, commercial, emergency, corporate)
6. **CTA** - Demo request form
7. **Footer** - Company info and links

## Design Features

- Modern, professional gradient design
- Smooth scroll animations
- Responsive mobile-first layout
- Interactive hover effects
- Counter animations for statistics
- Form validation and submission handling

## How to Use

### Local Development
Simply open `index.html` in a web browser:
```bash
open website/index.html
```

### Deploy to Production
Upload all files to your web hosting:
- Netlify: drag and drop the `website` folder
- Vercel: connect to Git and deploy
- AWS S3: upload as static website
- GitHub Pages: push to gh-pages branch

## Customization

### Update Content
Edit `index.html` to change text, features, and sections.

### Modify Styling
Edit `styles.css` to adjust colors, fonts, and layout:
- Primary color: `--primary-color: #2563eb;`
- Accent color: `--accent-color: #f59e0b;`
- Font family in `body` selector

### Add Analytics
Insert your tracking code before closing `</body>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

### Connect Form
Update `script.js` form handler to send to your backend:
```javascript
// Replace console.log with fetch to your API
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
})
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - All rights reserved.
