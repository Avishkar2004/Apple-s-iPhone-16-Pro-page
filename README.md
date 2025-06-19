# Apple iPhone 16 Pro Clone

A modern, responsive website that replicates Apple's iPhone 16 Pro product page with stunning animations and Apple-style design.

## 🚀 Features

- **Apple-Style Design**: Authentic Apple website aesthetics with proper typography and spacing
- **Smooth Animations**: Framer Motion powered animations that mimic Apple's website interactions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion
- **Interactive Components**: 
  - Animated navigation with scroll effects
  - Hero section with floating iPhone mockup
  - Interactive feature cards
  - Color selection gallery
  - Newsletter signup
  - Comprehensive footer

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Fonts**: Apple-style typography with SF Pro Display/Text fallbacks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avishkar2004/Apple-s-iPhone-16-Pro-page
   cd apple-iphone-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

## 🎯 Key Features Implemented

### Animations
- **Scroll-triggered animations** using Framer Motion's `useInView`
- **Hover effects** on buttons and cards
- **Floating animations** for the iPhone mockup
- **Smooth transitions** between states
- **Parallax effects** on scroll

### Responsive Design
- **Mobile-first approach** with Tailwind CSS
- **Breakpoint-specific layouts** for different screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized typography** scaling

### Performance
- **Next.js optimization** with App Router
- **Image optimization** with Next.js Image component
- **Lazy loading** for better performance
- **CSS-in-JS** with Tailwind for minimal bundle size

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

**Note**: This is a clone/educational project. All Apple branding, design elements, and content are property of Apple Inc. This project is created for learning purposes only.
