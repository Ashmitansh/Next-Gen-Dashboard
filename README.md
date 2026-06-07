# Next-Gen Learning Dashboard

A vibrant, interactive learning management dashboard built with Next.js 16, React 19, Framer Motion, and Tailwind CSS. Track courses, monitor progress, and stay motivated with gorgeous soft pastel colors, smooth animations, and rich interactivity.

## Features

- **Responsive Bento Grid Layout**: Adapts seamlessly from mobile (1 column) → tablet (2 columns) → desktop (4 columns)
- **Rich Interactive Animations**: Staggered page loads, spring physics hover effects, pulse scaling, shimmer effects, progress bar animations, and smooth transitions
- **Soft Colorful Palette**: Beautiful gradient backgrounds with purples, pinks, teals, and warm tones throughout
- **Fully Interactive Elements**: All tiles are clickable buttons with hover/tap feedback and engaging animations
- **Animated Progress Bars**: Visual progress tracking for each course with smooth animated fills
- **Activity Feed**: Interactive scrollable activity timeline with colorful status indicators
- **Server Components**: Leverages Next.js 16 Server Components with Suspense for optimal performance
- **Loading States**: Skeleton loaders with pulsing animations while content streams in

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Animations**: Framer Motion v12
- **Styling**: Tailwind CSS, custom dark theme
- **Database**: Supabase (PostgreSQL) with RLS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Supabase account (free tier available)

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo>
   cd learning-dashboard
   pnpm install
   ```

2. **Set up Supabase** (optional for demo):
   - Create a free project at https://supabase.com
   - Create a `courses` table with the following schema:
     ```sql
     CREATE TABLE courses (
       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
       title TEXT NOT NULL,
       progress INTEGER DEFAULT 0,
       icon_name TEXT DEFAULT 'code',
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );
     ```
   - Add your Supabase credentials to `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
     ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to see your dashboard.

## Architecture

### Component Structure

- **`Dashboard.tsx`** (Server Component)
  - Entry point that fetches course data
  - Manages Suspense boundaries for streaming
  - Renders the header

- **`DashboardGrid.tsx`** (Client Component)
  - Orchestrates the bento grid layout
  - Handles grid column configuration for responsive design
  - Renders all child tiles with Suspense fallbacks

- **`HeroTile.tsx`** (Client Component)
  - Welcome greeting with gamification (streak badge)
  - Animated gradient background with blur effects
  - Spans 2 columns on desktop, 1 on mobile

- **`ActivityTile.tsx`** (Client Component)
  - Scrollable activity feed showing recent learning events
  - Staggered animation for list items
  - Fixed height at 56 (14rem)

- **`CourseTile.tsx`** (Client Component)
  - Individual course card with progress tracking
  - Hover effect with elevated shadow and border highlight
  - Animated progress bar that fills on load

- **`SkeletonLoader.tsx`** (Client Component)
  - Pulsing placeholder cards during data fetch
  - Matches dimensions of their respective content tiles
  - Smooth fade animation

### Animation Strategy

All animations use **transform** and **opacity** only (no height/width changes) to avoid layout shifts and repaints:

1. **Page Load**: Staggered entrance animations with 0.1s delays between items
2. **Hover**: Spring physics on course tiles (y: -4px) with soft shadow glow
3. **Progress Bars**: Smooth width transitions from 0% to target progress
4. **List Items**: Subtle slideIn effects (translateX: -20px) with fade

### Styling Approach

- **Soft Pastel Color System**: Light background (#f5f3ff) with complementary soft tones
- **Multi-Color Tiles**: Each course card has its own color scheme (purple/pink, blue/cyan, yellow/orange, etc.)
- **Semantic Tokens**: CSS variables for consistent theming and easy customization
- **Tailwind Utilities**: Responsive breakpoints (md:, lg:) for layout adaptation
- **Gradient Overlays**: Animated gradient backgrounds on hover with shimmer effects
- **Custom Animations**: Pulse-scale, shimmer, bounce, and color-shift animations in utilities

## Responsive Design

### Grid Breakpoints

- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 4 columns

Grid uses `auto-rows-max` to respect individual tile heights. Course tiles are fixed at `h-56` (14rem).

## Data Fetching

Currently using **mock data** in `components/Dashboard.tsx` for demo purposes. To connect to Supabase:

1. Replace the `mockCourses` array with:
   ```typescript
   const { data } = await supabase
     .from('courses')
     .select('id, title, progress, icon_name, created_at')
     .order('created_at', { ascending: false })
   ```

2. Update error handling as needed for your use case

## Deployment

### Deploy to Vercel

1. Push your repository to GitHub
2. Import to Vercel: https://vercel.com/new
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

```bash
vercel deploy
```

## Customization

### Add New Courses

If using Supabase, insert courses directly:
```sql
INSERT INTO courses (title, progress, icon_name) 
VALUES ('My Course', 50, 'code');
```

### Change Colors

Edit the CSS variables in `app/globals.css` under the `.dark` class (which contains the light theme):
```css
.dark {
  --background: #f5f3ff;   /* Soft lavender background */
  --primary: #9f7aea;      /* Purple */
  --accent: #f687b3;       /* Pink */
  --secondary: #fbb6ce;    /* Light pink */
  /* ... */
}
```

Or customize course tile colors in `CourseTile.tsx`:
```typescript
const colors = [
  { bg: 'from-purple-100 to-pink-100', border: 'border-purple-200', accent: 'text-purple-600' },
  { bg: 'from-pink-100 to-rose-100', border: 'border-pink-200', accent: 'text-pink-600' },
  // Add more color schemes...
]
```

### Adjust Animations

Modify animation delays and durations in component files:
- `CourseTile.tsx`: `transition={{ delay: index * 0.1, duration: 0.5 }}`
- `ActivityTile.tsx`: `transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}`

## Performance

- **Suspense Streaming**: Server Components render and stream content as it becomes available
- **Skeleton Loaders**: Immediate visual feedback while fetching data
- **No Layout Shift**: Animations use transform/opacity only (CLS-safe)
- **Code Splitting**: Framer Motion is loaded lazily for client-only components

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Works on mobile, tablet, and desktop

## License

MIT

## Support

For issues or questions, open a GitHub issue or contact the maintainer.
