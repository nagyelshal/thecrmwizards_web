# The CRM Wizards - Marketing Website

A modern, high-performance marketing website for The CRM Wizards Salesforce & AI consultancy. Built with React, TypeScript, Tailwind CSS, and optimized for conversion and SEO.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Responsive Design**: Mobile-first, optimized for all devices
- **High Performance**: Lighthouse score 95+ (Performance, Best Practices, SEO)
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD schema, sitemap
- **Accessible**: AA color contrast, semantic HTML, alt text
- **CI/CD Ready**: GitHub Actions deployment to GitHub Pages

## 📋 Pages & Sections

### Core Pages
- **Homepage**: Hero, credentials, services overview, testimonials
- **Services**: Detailed pages for each service offering
- **Case Studies**: Success stories with measurable outcomes
- **Leadership**: Team bios and company values
- **Insights**: Blog posts and thought leadership
- **Contact**: Multiple contact options and inquiry form

### Key Sections
- ✅ Hero with compelling value proposition
- ✅ Credential badges (55 certs, 100+ implementations, 10+ years)
- ✅ Service cards with detailed breakdowns
- ✅ Testimonials and social proof
- ✅ Case studies with ROI metrics
- ✅ Team expertise and certifications
- ✅ Technical blog content
- ✅ Contact forms and scheduling

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: Native HTML forms with Formspree integration
- **Deployment**: GitHub Actions → GitHub Pages
- **Analytics**: Ready for Google Analytics/Plausible

## 🏗 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/{{GITHUB_USERNAME}}/{{REPO_NAME}}.git
cd {{REPO_NAME}}

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Deploy to GitHub Pages

1. **Create Repository**
   ```bash
   # Create new repository on GitHub
   # Push your code to main branch
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/{{GITHUB_USERNAME}}/{{REPO_NAME}}.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on push to main

3. **Configure Custom Domain (Optional)**
   - Add CNAME file with your domain
   - Configure DNS settings
   - Update base URL in vite.config.ts

## ⚙️ Configuration

### Environment Variables
Create `.env` file for local development:
```bash
# Form submission
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
```

### Customize for Your Deployment

1. **Update Repository URLs**
   - Replace `{{GITHUB_USERNAME}}` and `{{REPO_NAME}}` in:
     - README.md
     - vite.config.ts (base URL)
     - package.json

2. **Update Contact Information**
   - Email addresses in components
   - Phone numbers
   - Calendly links
   - Social media links

3. **Update Content**
   - Company name and branding
   - Service descriptions
   - Case study details
   - Team member information
   - Blog posts

4. **Configure Forms**
   - Set up Formspree account
   - Update form action URLs
   - Add environment variables

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#2563eb → #1d4ed8)
- **Accent**: Light blue (#0ea5e9)
- **Gray**: Neutral grays for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible contrast

### Components
- **Buttons**: Hover effects, rounded corners
- **Cards**: Subtle shadows, rounded borders
- **Layouts**: Consistent spacing, grid-based

## 📊 Performance & SEO

### Optimization Features
- ✅ Code splitting and lazy loading
- ✅ Optimized images and assets  
- ✅ Semantic HTML structure
- ✅ Meta tags and OpenGraph
- ✅ JSON-LD schema markup
- ✅ Sitemap and robots.txt
- ✅ Fast loading times

### Analytics Ready
- Google Analytics 4 integration
- Plausible Analytics support
- Custom event tracking
- Conversion goal setup

## 🔧 Maintenance

### Regular Updates
- Update dependencies monthly
- Review and update content quarterly
- Monitor performance metrics
- Test contact forms and links

### Content Management
- Add new blog posts in `/src/pages/InsightsPage.tsx`
- Update case studies with fresh metrics
- Refresh team bios and certifications
- Update service offerings as needed

## 📝 Customization Checklist

- [ ] Replace placeholder content with actual copy
- [ ] Update contact information and links
- [ ] Configure Formspree for contact forms
- [ ] Add real team photos and bios
- [ ] Update case study metrics
- [ ] Set up analytics tracking
- [ ] Configure custom domain
- [ ] Test all functionality before launch

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions or support:
- Email: hello@thecrmwizards.com
- Documentation: [GitHub Wiki](https://github.com/{{GITHUB_USERNAME}}/{{REPO_NAME}}/wiki)
- Issues: [GitHub Issues](https://github.com/{{GITHUB_USERNAME}}/{{REPO_NAME}}/issues)

---

Built with ❤️ by The CRM Wizards team
