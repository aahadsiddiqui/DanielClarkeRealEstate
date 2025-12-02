# Danny Real Estate Website

A modern, responsive Real Estate website built with Next.js, React, Tailwind CSS, and ShadCN UI components.

## Features

- 🏠 **Modern Design**: Beautiful, contemporary UI with a carefully curated color palette
- 📱 **Mobile Responsive**: Fully optimized for all device sizes
- 🎨 **ShadCN Components**: Built with high-quality, accessible UI components
- 🔍 **Interactive Search**: Real-time property filtering and search
- ❤️ **Favorite Properties**: Save your favorite listings
- ⭐ **Property Ratings**: View property ratings and reviews
- 🎯 **Featured Properties**: Highlight premium listings

## Color Palette

The website uses a sophisticated color palette:
- **Midnight Green** (#104547) - Primary color
- **Outer Space** (#4B5358) - Secondary color
- **Dim Gray** (#727072) - Muted text
- **Rose Quartz** (#AF929D) - Accent color
- **Lavender** (#D2D6EF) - Light background

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - High-quality component library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Navbar and Footer
│   ├── page.tsx         # Home page with property listings
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── ui/              # ShadCN UI components
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   └── PropertyCard.tsx # Property card component
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Features in Detail

### Property Search
- Search by location or property name
- Filter by price range
- Filter by number of bedrooms
- Real-time filtering

### Property Cards
- High-quality property images
- Property details (beds, baths, sqft)
- Favorite functionality
- Rating display
- Featured property badges

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Collapsible mobile navigation

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  midnight: "#104547",
  outer: "#4B5358",
  dim: "#727072",
  rose: "#AF929D",
  lavender: "#D2D6EF",
}
```

### Properties
Modify the `properties` array in `app/page.tsx` to add or update property listings.

## License

This project is open source and available under the MIT License.

