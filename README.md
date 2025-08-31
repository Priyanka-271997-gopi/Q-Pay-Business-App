## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

qr -pay-dashboard/
├─ src/
│  ├─ components/
│  ├─ pages/
│  └─ main.tsx
├─ public/
├─ package.json
├─ vite.config.ts
├─ README.md   
└─ .gitignore

Project Title + Short Description
# QR Pay Dashboard
A simple Qr pay  dashboard built with React + Vite + Tailwind.

### 🛠️ Tech Stack
- **React** – UI Library  
- **Vite** – Fast bundler/dev server  
- **Tailwind CSS** – Utility-first styling  
- **React Router** – Client-side routing  
- **ESLint + Prettier** – Code quality & formatting  

### 🎨 Design Approach
- **Component Separation**:  
  - Small, reusable components (`Button`, `Card`, `Navbar`) kept inside `components/`.  
  - `pages/` folder contains full screens that combine these components.  
- **State Management**:  
  - Local state handled via React `useState` and `useEffect`.  
  - Shared/global state (ex: auth, theme) managed using **React Context** .  
- **Scalability**:  
  - Code splitting at route level.  
  - API functions centralized in `lib/`.  
  - Custom hooks (`hooks/`) used for reusable logic like data fetching.  
- **Styling**:  
  - Tailwind CSS for consistency and responsiveness.  
  - Followed mobile-first design.  

## ⏱️ Time Spent
- **Day 1 (Setup & Basics):** Project setup, GitHub repo creation, initial UI layout (3 hrs)
- **Day 2 (Core Development):** Component development, routing, state management, styling (4 hrs)
- **Day 3 (Polish & Docs):** Bug fixes, responsive adjustments, README documentation, deployment (3 hrs)

**Total:** ~10 hrs







