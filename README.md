# Apple iPhone 16 Pro Clone

A modern, responsive website that replicates Apple's iPhone 16 Pro product page with stunning animations and Apple-style design.

## 🛠️ Technical Decisions

### **Framework Choice: Next.js 15**
- **Why Next.js**: Chosen for its App Router, server-side rendering, and excellent developer experience
- **App Router**: Used for better performance and SEO optimization
- **TypeScript**: Added for type safety and better development experience

### **Styling: Tailwind CSS v4**
- **Why Tailwind**: Rapid development with utility-first approach
- **v4**: Latest version with improved performance and new features
- **Custom CSS**: Minimal custom CSS for Apple-specific typography and scrollbars

### **Animations: Framer Motion**
- **Why Framer Motion**: Industry standard for React animations with excellent performance
- **Key Features Used**:
  - `useInView`: Scroll-triggered animations
  - `useScroll` + `useTransform`: Parallax effects
  - `AnimatePresence`: Smooth component transitions
  - `whileHover`/`whileTap`: Interactive micro-animations

### **Component Architecture**
```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button)
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── GallerySection.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts      # Utility functions (cn helper)
└── app/
    ├── layout.tsx    # Root layout with metadata
    ├── page.tsx      # Main page component
    └── globals.css   # Global styles
```

### **Key Animation Patterns**

1. **Scroll-Triggered Animations**
   ```tsx
   const isInView = useInView(ref, { once: true })
   // Animates elements when they enter viewport
   ```

2. **Parallax Effects**
   ```tsx
   const { scrollYProgress } = useScroll()
   const y = useTransform(scrollYProgress, [0, 1], [0, -300])
   // Creates depth with scroll-based transformations
   ```

3. **Interactive Hover States**
   ```tsx
   whileHover={{ scale: 1.05, y: -10 }}
   whileTap={{ scale: 0.95 }}
   // Provides tactile feedback
   ```

### **Responsive Design Strategy**
- **Mobile-first**: Base styles for mobile, enhanced for larger screens
- **Breakpoints**: Tailwind's responsive prefixes (sm:, md:, lg:)
- **Touch-friendly**: Larger touch targets and smooth interactions

### **Performance Optimizations**
- **Next.js Image**: Automatic image optimization
- **Lazy Loading**: Components animate only when in view
- **CSS-in-JS**: Tailwind purges unused styles
- **Bundle Splitting**: Automatic code splitting with App Router

### **Apple Design System Implementation**
- **Typography**: SF Pro Display/Text with system font fallbacks
- **Spacing**: Consistent 8px grid system
- **Colors**: Apple's signature black and gray palette
- **Interactions**: Subtle, purposeful animations

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📱 Features

- **Apple-Style Design**: Authentic Apple website aesthetics with proper typography and spacing
- **Smooth Animations**: Framer Motion powered animations that mimic Apple's website interactions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated navigation with scroll effects
  - Hero section with floating iPhone mockup
  - Interactive feature cards
  - Color selection gallery
  - Newsletter signup
  - Comprehensive footer

## 🎨 Components

### Navigation
- Fixed navigation bar with Apple logo
- Responsive menu with mobile hamburger
- Scroll-based background changes
- Smooth hover animations

### Hero Section
- Large typography with "iPhone 16 Pro" branding
- Animated floating iPhone mockup
- Call-to-action buttons
- Scroll indicator
- Dynamic background gradients

### Features Section
- Grid layout of iPhone features
- Interactive cards with hover effects
- Icon animations
- Smooth scroll-triggered animations

### Gallery Section
- Interactive color selection
- Dynamic image switching
- Specifications panel
- Smooth transitions

### Footer
- Newsletter signup
- Comprehensive link sections
- Apple-style layout
- Responsive design

## 🎯 Key Libraries

- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **@radix-ui**: Accessible component primitives
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Class name utilities

## 🎨 Design System

### Colors
- **Primary**: Black (#000000) - Apple's signature color
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Blue for interactive elements
- **Gradients**: Dynamic gradients for visual appeal

### Typography
- **Display**: Large, bold text for headlines
- **Body**: Regular weight for content
- **Caption**: Smaller text for details
- **Apple-style**: SF Pro Display/Text with fallbacks

### Spacing
- **Consistent spacing** using Tailwind's spacing scale
- **Apple-style margins** and padding
- **Responsive spacing** that adapts to screen size

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Colors
Update the color scheme in `src/app/globals.css`:
```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other colors */
}
```

### Animations
Modify animation parameters in component files:
```tsx
// Example: Change animation duration
transition={{ duration: 0.8, delay: 0.2 }}
```

### Content
Update text content in component files:
```tsx
// Example: Change hero title
<h1>Your Product Name</h1>
```

## 📄 License

This project is for educational purposes. Apple's design and branding are trademarks of Apple Inc.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

*This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience.*
