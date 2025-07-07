# Copilot Instructions for Invospire Marketing Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a fully responsive marketing website for Invospire, built with Next.js 14+ and TypeScript. The design and functionality should match the structure and layout of https://www.unifiedinfotech.net/.

## Technologies Used
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS for styling
- ShadCN UI for components
- React Hook Form + Zod for form validation
- Next/Image for optimized images
- MDX/Markdown for content
- Lucide React for icons

## Key Design Principles
1. **Mobile-first responsive design** - All components must work perfectly on mobile, tablet, and desktop
2. **Accessibility** - Follow WCAG guidelines, use semantic HTML, proper ARIA labels
3. **Performance** - Optimize images, use Next.js best practices, lazy loading
4. **SEO-friendly** - Proper meta tags, structured data, semantic HTML
5. **Modern UI** - Clean, professional design matching Unified Infotech's aesthetic

## Component Structure
- Use ShadCN UI components as base components
- Create reusable components in `/src/components/ui/`
- Page-specific components in `/src/components/`
- Follow atomic design principles (atoms, molecules, organisms)

## Styling Guidelines
- Use Tailwind CSS utility classes
- Create custom components using className patterns
- Use consistent spacing (4, 8, 12, 16, 24, 32, 48, 64px)
- Color scheme should be professional (blues, grays, whites)
- Use proper hover states and transitions

## Content Management
- Use MDX for blog posts and rich content
- JSON files for testimonials, services, and other structured data
- Keep all content easily editable by non-developers

## Performance Requirements
- Lighthouse scores above 90 for all metrics
- Optimized images with proper alt text
- Lazy loading for non-critical content
- Fast loading times

## Brand Guidelines for Invospire
- Professional software engineering company
- Focus on innovation, reliability, and expertise
- Target markets: E-commerce, Enterprise, Startups
- Services: Software Engineering, E-Commerce, Marketing, Design, CMS
- Locations: US and Pakistan offices
