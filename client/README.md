# EduReach — Frontend (Client)

React 19 + Vite + TypeScript + Tailwind CSS v4 frontend for the EduReach College Intelligence Platform.

## Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite 6** — dev server + bundler
- **Tailwind CSS v4** — utility-first styling
- **React Router DOM 7** — client-side routing
- **Axios** — HTTP client
- **Lucide React** — icons
- **React Hot Toast** — notifications

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment

The API base URL is hardcoded in `src/services/api.ts`. Update it for production:

```ts
// src/services/api.ts
const API = axios.create({ baseURL: "https://your-api-domain.com/api" });
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── AchievementsSection.tsx
│   ├── CoursesSection.tsx
│   ├── QuotesSection.tsx
│   ├── MentorsSection.tsx
│   ├── StudentLifeSection.tsx
│   ├── EventsGallery.tsx
│   ├── CounselorCTA.tsx
│   ├── HiringStatsSection.tsx
│   ├── Footer.tsx
│   ├── ChatDrawer.tsx
│   ├── FloatingChatButton.tsx
│   ├── CallPopup.tsx
│   └── SignupPopup.tsx
├── pages/
│   ├── HomePage.tsx    # Main page with content gating
│   ├── LoginPage.tsx
│   └── SignupPage.tsx
├── context/
│   └── AuthContext.tsx # JWT auth state
├── services/
│   ├── api.ts          # Axios instance
│   ├── auth.service.ts
│   ├── chat.service.ts
│   └── vapi.service.ts
└── data/
    └── content.ts      # All static content + image URLs
```
