<task>
You are tasked with rebuilding the website for DFit Academy (https://www.dfitacademy.com.au/) using a modern, beautiful design while preserving all existing content and products.
</task>

<context>
The client runs a fitness academy and has an old website that needs a complete visual overhaul. They have no access to the original code or hosting, but have created UI/UX mockups for the new design.
</context>

<instructions>
<step_1_analyze_design>
- First, examine the UI/UX folder in the root directory
- Review all 5-6 images to understand the desired design aesthetic ONLY
- Note key design elements: layout patterns, color schemes, typography, spacing, and component styles
- CRITICAL: These images show ONLY the design style and visual aesthetic - DO NOT use any text content, product names, or information from these images
- The UI/UX images are purely for design reference - all actual content must come from the original website
</step_1_analyze_design>

<step_2_scrape_existing_site>
- Use Puppeteer to access https://www.dfitacademy.com.au/
- Use WebFetch and WebSearch tools for comprehensive content extraction
- Systematically navigate through ALL pages of the website using Puppeteer
- MANDATORY: Map all category products by navigating to these specific routes:
  1. https://www.dfitacademy.com.au/category/fitness-certification
  2. https://www.dfitacademy.com.au/category/all-fitness-certifications  
  3. https://www.dfitacademy.com.au/category/pet-certification
  4. https://www.dfitacademy.com.au/category/workshop-ceu
- For each category page:
  - Use the left side navigation to identify ALL products in each category
  - Extract complete product details (names, descriptions, pricing, features)
  - Document the category structure and product hierarchy
  - Map each product to its correct category for the new website
- Extract and document in the AI_docs folder:
  - All text content (headings, descriptions, about info)
  - Complete product catalog with category mappings
  - Pricing information for all products
  - Class schedules or program structures
  - Contact information
  - Navigation structure and menu items
  - Any other relevant content
- Create organized markdown files:
  - One file per category with all products listed
  - One master product mapping file
  - Individual files for each major page/section
</step_2_scrape_existing_site>

<step_3_build_new_website>
- Create a pixel-perfect implementation matching the UI/UX designs
- Structure:
  - Multi-page application with proper routing
  - Responsive design that works on all devices
  - Clean, semantic code structure
  - Modern animations and transitions
  - Smooth scrolling and interactive elements
- Include all content gathered from the original site
- For images/videos: use high-quality fitness-related stock images from free sources (Unsplash, Pexels)
- Implement a simple cart system:
  - Add to cart buttons for products/services
  - Cart icon showing item count
  - Cart modal/page displaying selected items
  - Use browser storage for cart persistence (no backend needed)
  - Basic total calculation
</step_3_build_new_website>
</instructions>

<requirements>
- Complete all pages found on the original website
- Maintain all product and service information
- Pixel-perfect adherence to the provided UI/UX designs
- Fully functional front-end with smooth interactions
- Mobile-responsive design
- Fast loading and optimized performance
- Clean, well-commented code
</requirements>

<deliverables>
- Complete website with all pages
- Organized file structure
- Documentation of all scraped content in AI_docs folder
- Functional cart system (MVP level)
- All using the new modern design from UI/UX folder
</deliverables>

<important_notes>
- Focus on design quality and user experience
- No backend/database implementation needed
- No login/authentication features required
- Prioritize visual appeal while preserving all original content
- CRITICAL: Create accurate product category mapping from the original site's four main categories (fitness-certification, all-fitness-certifications, pet-certification, workshop-ceu)
- UI/UX images are for DESIGN REFERENCE ONLY - never use content/text from these images
- All products must be correctly categorized and accessible through proper navigation structure
- Continue working until the entire website is complete with full product catalog
</important_notes>