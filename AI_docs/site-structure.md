# D-FIT Academy Site Structure & Navigation

## Main Navigation Structure
1. **Home** - Landing page with hero, featured programs, and overview
2. **Welcome** - About/Welcome section (currently anchor link)
3. **Our Programs** - Program catalog browser (currently anchor link)
4. **About Us** - Company story and credentials (currently anchor link)
5. **Enroll Now** - Course enrollment and product catalog

## Proposed Multi-Page Structure

### Pages to Create:
1. **Home** (`/`) - Landing page with hero and key highlights
2. **Programs** (`/programs`) - Complete program catalog with filtering
3. **About** (`/about`) - Company story, mission, accreditations
4. **Contact** (`/contact`) - Contact form and information
5. **Coaching** (`/coaching`) - Personal coaching services
6. **Cart** (`/cart`) - Shopping cart functionality
7. **Individual Program Pages** (`/program/[slug]`) - Detailed product pages

### Program Categories for Navigation:
1. **PFT Certifications**
   - Basic PFT ($799)
   - Classic PFT ($1,399)
   - Premium PFT ($2,199)

2. **Fitness Certifications**
   - Master PFT ($5,499)
   - Group Fitness Specialist ($5,499)
   - Medical Fitness Specialist ($5,499)

3. **Workshops & CEU**
   - 16+ specialized workshops ($299-$599)
   - Continuing Education Units
   - Sport-specific training

4. **Coaching Services**
   - Personal fitness coaching
   - Nutrition guidance
   - Online support plans

## Key Features to Implement:
- Product catalog with search/filter
- Shopping cart system
- Course enrollment flow
- Responsive design
- Modern animations
- Mobile-first approach
- SEO optimization

## Brand Elements:
- **Primary Colors:** Green (#A7E800), Navy/Dark
- **Typography:** Modern sans-serif
- **Style:** Professional fitness education
- **Messaging:** "Certify Your Passion", "Transform Your Life"

## Technical Stack:
- React + TypeScript
- Vite build system
- Tailwind CSS
- Shadcn/ui components
- React Router for multi-page navigation
- Zustand for state management
- Local storage for cart persistence