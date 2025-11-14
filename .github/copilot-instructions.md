# Copilot Instructions for Center River Restaurant Website

## Architecture Overview

This is a **Next.js 15 App Router** project for a restaurant website with **static site export** configuration (`output: 'export'`). The site features:

- Restaurant menus, online shop, takeout services
- News/blog system with API integration
- Mixed data management: API for news, static files for products/stores
- Custom responsive design system with fluid typography

## Key Development Patterns

### File Organization

- **Page modules**: Each major section has its own SCSS module (`PageTop.module.scss`, `PageProducts.module.scss`)
- **Component hierarchy**: `components/{section}/` organized by page sections (top, products, news, etc.)
- **Data layer**: Static TypeScript files in `src/data/` with strongly typed interfaces
- **Block components**: Reusable sections prefixed with "Block" (`BlockNews`, `BlockMenu`)

### Data Management Pattern

```typescript
// Example: API-driven news data
import { fetchNews } from '@/lib/fetchNewsApi';
const { news, total } = await fetchNews(5);

// Example: Static product data
import productData from '@/data/products/product001';
import { Store } from '@/data/storeList';
```

- **News data**: Fetched from API via `fetchNews()` in `src/lib/fetchNewsApi.ts`
- **Product data**: Individual files (`product001.ts` through `product027.ts`)
- **Store data**: Centralized in `storeList.ts` with typed Store objects
- **Navigation menu**: Centralized in `navMenuData.ts`
- **Mixed approach**: API for dynamic news, static imports for products/stores

### Component Conventions

- **File headers**: All files have standardized comment blocks with URL, creation date
- **Import order**: `@/styles/` imports first, then data/components
- **Styling**: SCSS modules with kebab-case class names
- **TypeScript**: Strict typing with custom interfaces (`NewsItem`, `ProductData`, `Store`, `NavMenuItem`)

### Next.js Specific Rules

⚠️ **Critical**: Follow these App Router constraints:

- Page `params` props are **NOT Promise type** - use `{ params: { id: string } }`
- `generateMetadata` functions are **synchronous** (no async/await)
- `generateStaticParams` functions are **synchronous**
- Static export with `images.unoptimized: true`

### Environment & Build

- **Development**: `npm run dev`
- **Production build**: `npm run build` (includes cleanup of 404 files)
- **Linting**: `npm run lint:style` for SCSS files
- **Static export**: Configured for file-based hosting

### Styling Architecture

- **Custom SCSS functions**: `FZ()` for fluid typography scaling
- **Breakpoint system**: Custom mixins in `_variable.scss`
- **Global styles**: `globals.scss` with imports from `_variable.scss`, `_mixin.scss`
- **Page-specific**: Modular SCSS files per major page
- **Component styles**: Located in `styles/components/` directory
- **Naming**: kebab-case for CSS classes, camelCase for TypeScript

```scss
// Custom fluid typography function
@function FZ($size) {
  @return max(12px, ($size / $max-font) * 1em);
}
```

### Key Directories

- `src/data/products/`: Product data files (product001.ts - product027.ts)
- `src/data/storeList.ts`: Store location data with typed interfaces
- `src/components/common/`: Shared components (Header, Footer, PageHead)
- `src/components/{section}/`: Page-specific components
- `public/images/`: Static assets organized by section

## Development Workflow

1. Component files include standardized headers with creation dates
2. Data changes go through TypeScript files in `src/data/`
3. Style changes use SCSS modules with established naming conventions
4. All content is static - no dynamic API integration

## Common Tasks

- **Add product**: Create new `productXXX.ts` file in `src/data/products/` following existing pattern
- **Update store info**: Modify `storeList.ts` with proper Store interface
- **Style updates**: Modify relevant `.module.scss` file, use `FZ()` for responsive text
- **New components**: Follow Block prefix pattern for reusable sections
