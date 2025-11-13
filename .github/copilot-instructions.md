# Copilot Instructions for Center River Restaurant Website

## Architecture Overview

This is a **Next.js 15 App Router** project for a restaurant website with **static site export** configuration (`output: 'export'`). The site features:

- Restaurant menus, online shop, takeout services
- News/blog system with dynamic content
- Static file-based data management (no database)

## Key Development Patterns

### File Organization

- **Page modules**: Each major section has its own SCSS module (`PageTop.module.scss`, `PageProducts.module.scss`)
- **Component hierarchy**: `components/{section}/` organized by page sections (top, products, news, etc.)
- **Data layer**: Static TypeScript files in `src/data/` with strongly typed interfaces
- **Block components**: Reusable sections prefixed with "Block" (`BlockNews`, `BlockMenu`)

### Data Management Pattern

```typescript
// Example: API-driven news data
const newsData = await fetchNews(10);
const sortedNews = [...newsData].sort((a, b) => (a.date < b.date ? 1 : -1));
```

- News articles fetched from API via `fetchNews()`
- Product data in individual files (`product001.ts` through `product020.ts`)
- Navigation menu centralized in `navMenuData.ts`

### Component Conventions

- **File headers**: All files have standardized comment blocks with URL, creation date
- **Import order**: `@/styles/` imports first, then data/components
- **Styling**: SCSS modules with kebab-case class names
- **TypeScript**: Strict typing with custom interfaces (`NewsItem`, `NavMenuItem`)

### Next.js Specific Rules

⚠️ **Critical**: Follow these App Router constraints:

- Page `params` props are **NOT Promise type** - use `{ params: { id: string } }`
- `generateMetadata` functions are **synchronous** (no async/await)
- `generateStaticParams` functions are **synchronous**

### Environment & Build

- **Development**: `npm run dev`
- **Production build**: `npm run build` (includes cleanup of 404 files)
- **Linting**: `npm run lint:style` for SCSS files
- **Static export**: Configured for file-based hosting

### Styling Architecture

- **Global styles**: `globals.scss` with imports from `_variable.scss`, `_mixin.scss`
- **Page-specific**: Modular SCSS files per major page
- **Component styles**: Located in `styles/components/` directory
- **Naming**: kebab-case for CSS classes, camelCase for TypeScript

### Key Directories

- `src/data/`: Static data files with TypeScript interfaces
- `src/components/common/`: Shared components (Header, Footer, PageHead)
- `src/components/{section}/`: Page-specific components
- `public/images/`: Static assets organized by section

## Development Workflow

1. Component files include standardized headers with creation dates
2. Data changes go through TypeScript files in `src/data/`
3. Style changes use SCSS modules with established naming conventions
4. News articles require both data entry and separate body content files

## Common Tasks

- **News system**: Uses API endpoints (`/news/detail?id=xxx` for details)
- **Add product**: Create new `productXXX.ts` file following existing pattern
- **Style updates**: Modify relevant `.module.scss` file, respecting existing class structure
- **HTML processing**: Uses `convertFontToSpan()` and `convertRemToPx()` for content formatting
