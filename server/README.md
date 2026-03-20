# College-Chatbot-Server

Node.js + Express + LangChain + MongoDB backend for the EduReach College Intelligence Platform.

## Tech Stack

- **Node.js 24** — native `.env` loading, native TypeScript via `--experimental-transform-types`
- **Express 5** — HTTP framework
- **MongoDB + Mongoose 9** — database + ODM
- **LangChain** + `@langchain/google-genai` — AI orchestration (Gemini)
- `@langchain/mongodb` — MongoDB Atlas Vector Store (RAG)
- **JWT** — authentication
- **bcryptjs** — password hashing
- **Vapi AI** — voice call initiation

## Getting Started

```bash
# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your real values

# Run dev server with auto-reload (http://localhost:5000)
npm run dev

# Or run production build
npm run build && npm start
```

## Environment Variables

See `.env.example` for the full list. Required variables:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret for JWT signing (min 32 chars) |
| `CLIENT_URL` | Frontend URL for CORS (e.g. http://localhost:5173) |
| `GOOGLE_API_KEY` | Google AI API key for Gemini |
| `VAPI_API_KEY` | Vapi API key for voice calls |
| `VAPI_ASSISTANT_ID` | Vapi assistant ID |
| `VAPI_PHONE_NUMBER_ID` | Vapi phone number ID |

## API Endpoints

### Auth (`/api/auth`)
- `POST /register` — Register new user
- `POST /login` — Login, returns JWT
- `GET /me` — Get current user (requires Bearer token)

### Chat (`/api/chat`)
- `POST /` — Send message to RAG chatbot (requires Bearer token)

### Vapi (`/api/vapi`)
- `POST /call` — Initiate AI voice counseling call (requires Bearer token)

## RAG Knowledge Base

Add `.txt` files to `server/knowledge-base/` to extend the chatbot's knowledge. On first start, the server automatically:

1. Loads all `.txt` files from `knowledge-base/`
2. Splits them into ~1000 char chunks
3. Generates embeddings using `text-embedding-004`
4. Stores them in MongoDB Atlas Vector Search

## Project Structure

```
src/
├── app.ts              # Express app setup + CORS + routes
├── server.ts           # Entry point (DB connect + RAG init + listen)
├── config/
│   └── db.ts           # MongoDB connection
├── controllers/
│   ├── auth.controller.ts
│   ├── chat.controller.ts
│   └── vapi.controller.ts
├── middleware/
│   ├── auth.middleware.ts  # JWT verification
│   └── error.middleware.ts
├── models/
│   └── User.ts
├── routes/
│   ├── auth.routes.ts
│   ├── chat.routes.ts
│   └── vapi.routes.ts
├── services/
│   ├── rag.service.ts     # LangChain RAG setup
│   └── vapi.service.ts
└── utils/
    ├── jwt.utils.ts
    └── password.utils.ts

knowledge-base/            # .txt knowledge files for RAG
```
