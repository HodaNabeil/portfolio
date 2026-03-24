# Hoda Nabeil - Portfolio Website

A modern, responsive portfolio website built with Next.js 16 showcasing professional projects, technical skills, and contact information.

## 🌟 Features

- **Modern Design**: Clean, minimal interface with smooth animations and transitions
- **Responsive Layout**: Optimized for all devices - mobile, tablet, and desktop
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Project Showcase**: Interactive project cards with live demos and GitHub links
- **Tech Stack Display**: Organized technology stack with categories
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with Next.js 16 and optimized assets
- **SEO Friendly**: Meta tags and structured data for search engines
- **Type Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### UI Components
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (Next.js 16)

## 🚀 Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/HodaNabeil/my-website.git
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables (if any).

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### For Visitors
- Browse through different sections using the navigation menu
- View project details and access live demos
- Learn about my technical skills and experience
- Get in touch through the contact form

### For Developers
- **Project Structure**: Organized with feature-based architecture
- **Component Reusability**: Modular components following SOLID principles
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🖼️ Screenshots

### Homepage
![Homepage](/public/screenshots/homepage.png)

### Projects Page
![Projects](/public/screenshots/projects.png)

### Tech Stack
![Tech Stack](/public/screenshots/tech-stack.png)

*Note: Screenshots will be added as the project evolves*

## 📁 Project Structure

```
my-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── projects/           # Projects page
│   │   ├── tech-stack/         # Tech stack page
│   │   └── globals.css         # Global styles
│   ├── components/             # Shared UI components
│   │   └── ui/                 # shadcn/ui components
│   ├── features/               # Feature-based modules
│   │   ├── about/              # About section components
│   │   ├── contact/            # Contact section components
│   │   ├── home/               # Home section components
│   │   ├── projects/           # Projects section components
│   │   └── tech-stack/         # Tech stack section components
│   ├── lib/                    # Utilities and configurations
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
└── README.md                   # This file
```

## 🎯 Purpose

This portfolio website serves as:

1. **Professional Presence**: A digital resume and portfolio for potential employers and clients
2. **Project Showcase**: Platform to display my technical skills and completed projects
3. **Contact Hub**: Easy way for visitors to reach out for collaborations or opportunities
4. **Skill Demonstration**: Practical example of my frontend development capabilities
5. **Personal Branding**: Representation of my design philosophy and technical expertise

## 🔮 Future Improvements

- [ ] Blog section for technical articles
- [ ] Advanced filtering and search for projects
- [ ] Dark mode toggle animation
- [ ] Internationalization (i18n) support
- [ ] PWA capabilities
- [ ] Advanced analytics integration
- [ ] Testimonials section
- [ ] Interactive 3D elements
- [ ] CMS integration for dynamic content

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hoda Nabeil**
- Frontend Developer
- Portfolio: [https://hoda-portfolio.vercel.app](https://hoda-portfolio.vercel.app)
- GitHub: [@HodaNabeil](https://github.com/HodaNabeil)
- LinkedIn: [hoda-nabeil](https://linkedin.com/in/hoda-nabeil)

---

⭐ If you like this project, please give it a star!
