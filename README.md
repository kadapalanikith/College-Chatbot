# College-Chatbot

<div align="center">
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-9-47A248?style=flat-square&logo=mongodb)](https://mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

**A full-stack AI-powered college information platform** with RAG-based chatbot, AI voice counseling via Vapi, and a gated content model for authenticated users.

[Live Demo](#) · [Report Bug](https://github.com/kadapalanikith/College-Chatbot/issues) · [Request Feature](https://github.com/kadapalanikith/College-Chatbot/issues)

</div>

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🤖 **AI Chatbot** | RAG-powered chatbot using LangChain + Google Gemini + MongoDB Atlas Vector Search |
| 📞 **AI Voice Counseling** | Vapi integration — initiates real AI voice calls for personalized guidance |
| 🔐 **Auth System** | JWT-based register/login with bcrypt password hashing |
| 🎯 **Gated Content** | Campus life, placement stats & counselor CTA — visible only to logged-in users |
| 📱 **Fully Responsive** | Mobile-first design optimized for all screen sizes |
| 🎨 **Premium UI** | Maroon + amber design system, Playfair Display fonts, smooth animations |
| 🔍 **SEO Ready** | Proper meta tags, semantic HTML, Open Graph support |

---

## 🏗️ Architecture

```
edureach-platform/
├── client/          # React 19 + Vite + Tailwind CSS v4 (Frontend)
└── server/          # Node.js 24 + Express 5 + LangChain + MongoDB (Backend)
```

### Tech Stack

**Frontend (Client)**
- React 19 + TypeScript 5.8
- Vite 6 + Tailwind CSS v4
- React Router DOM 7
- Axios + React Hot Toast
- Lucide React icons

**Backend (Server)**
- Node.js 24 (native `.env` loading, native TypeScript via `--experimental-transform-types`)
- Express 5
- MongoDB + Mongoose 9
- LangChain + `@langchain/google-genai` (Gemini embeddings + chat)
- `@langchain/mongodb` (Vector Store for RAG)
- JWT + bcryptjs
- Vapi AI (voice calls)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (LTS) or 24+
- MongoDB Atlas account (free tier works)
- Google AI API key (Gemini)
- Vapi account (for voice calls) — _optional_

### 1. Clone

```bash
git clone https://github.com/kadapalanikith/College-Chatbot.git
cd College-Chatbot
```

### 2. Setup Server

```bash
cd server
cp .env.example .env
# Edit .env with your real credentials
npm install
npm run dev
```

### 3. Setup Client

```bash
cd ../client
npm install
npm run dev
```

The app will be running at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

---

## 📁 Repository Structure

```
College-Chatbot/
├── client/
│   ├── src/
│   │   ├── components/       # 16 UI components
│   │   ├── pages/            # HomePage, LoginPage, SignupPage
│   │   ├── context/          # AuthContext (JWT + user state)
│   │   ├── services/         # API service layer
│   │   └── data/             # Static content & config
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── app.ts            # Express app + CORS + routes
│   │   ├── server.ts         # Entry point (DB + RAG init)
│   │   ├── config/           # Database config
│   │   ├── controllers/      # auth, chat, vapi
│   │   ├── middleware/       # JWT auth + error handler
│   │   ├── models/           # Mongoose User model
│   │   ├── routes/           # auth, chat, vapi routes
│   │   ├── services/         # RAG service, Vapi service
│   │   └── utils/            # JWT utils, password utils
│   ├── knowledge-base/       # .txt files for RAG
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Create new account | Public |
| POST | `/api/auth/login` | Login, get JWT | Public |
| GET | `/api/auth/me` | Get current user | 🔑 Bearer Token |

### Chat (RAG Chatbot)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/chat` | Send message, get AI response | 🔑 Bearer Token |

### Vapi (AI Voice Calls)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/vapi/call` | Initiate AI counselor call | 🔑 Bearer Token |

---

## 🤖 How the RAG Works

1. On first server start, `.txt` files in `server/knowledge-base/` are split into chunks
2. Chunks are embedded using Google Gemini's `text-embedding-004` model
3. Vectors are stored in MongoDB Atlas Vector Search
4. On chat requests, the query is embedded and nearest chunks retrieved
5. Retrieved context + user query → Gemini chat response

---

## 🌐 Deployment

### Client (Vercel/Netlify)
```bash
cd client && npm run build
# Deploy the dist/ folder
```
Set environment variable: `VITE_API_URL=https://your-server.com/api`

### Server (Railway/Render/Fly.io)
Set all environment variables from `.env.example` in your hosting dashboard.

---

## 📸 Screenshots

| Page | Desktop | Mobile |
|------|---------|--------|
| Homepage | Maroon hero with dual CTAs | Readable hero, stacked buttons |
| Login | Side-by-side panel | Full-screen form |
| Courses | 3-col B.Tech grid | Single column |
| Chat | Floating bottom-right popup | Edge-to-edge on mobile |

---

## 📄 License

MIT © 2026 [Kadapala Nikith](https://github.com/kadapalanikith)

---

<div align="center">
  Made with ♥ in Hyderabad, India
</div>
