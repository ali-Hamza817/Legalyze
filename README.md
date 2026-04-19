# 🏛️ Legalyze

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

**An Open-Source Structure-Aware Agentic RAG Platform for High-Precision Legal Intelligence**

Transforming judicial workflows in Pakistan through intelligent document analysis, constitutional compliance automation, and AI-powered legal research.

---

## 📖 What is Legalyze?

**Legalyze** is an open-source platform that automates legal research and case drafting for Pakistani courts. It reduces legal research time from hours to minutes while ensuring zero AI hallucinations through mandatory source citations.

### ✨ Core Features

- 🧙 **Case Buildup Wizard** - 7-step AI-guided interactive case preparation
- ⚖️ **Constitutional Compliance** - Automated Article-by-Article auditing against 1973 Constitution
- 🔍 **Dual-Database RAG** - Semantic (Pinecone) + Lexical (MongoDB) retrieval for accuracy
- 📊 **Document Analysis** - Automatic party identification, forum validation, metadata extraction
- 🤖 **Agentic Intelligence** - Intent classification, context synthesis, hallucination prevention

---

## 🚀 Quick Start with Docker (Recommended)

**3-step setup, 5 minutes to run:**

### 1. Get API Keys (All Free Tiers)

| Service | Link |
|---------|------|
| MongoDB | [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) |
| OpenAI | [platform.openai.com](https://platform.openai.com/account/api-keys) |
| Pinecone | [pinecone.io](https://www.pinecone.io/) |
| AWS S3 | [console.aws.amazon.com/s3](https://console.aws.amazon.com/s3/) |

### 2. Clone & Configure

```bash
git clone https://github.com/ali-Hamza817/Legalyze.git
cd Legalyze
cp .env.example .env

# Edit .env and add your API keys
```

**Minimal .env template:**
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/legalyze
OPENAI_API_KEY=sk-your-key
PINECONE_API_KEY=pcsk_your-key
PINECONE_INDEX_NAME=legal-documents
PINECONE_ENVIRONMENT=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_S3_BUCKET=your-bucket
AWS_REGION=us-east-1
JWT_SECRET=generate-random-string-here
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000
```

### 3. Run with Docker

```bash
docker-compose up --build
```

That's it! System is running:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:5000/api/health
- **Test Login**: admin@legalyze.com / Admin@123

---

## 💻 Local Development (Without Docker)

### Backend
```bash
cd backend
npm install
cp ../.env .env
npm run seed
npm run dev
# Runs on http://localhost:5000
```

### Frontend
```bash
cd Legalyzing
npm install
npm run dev
# Runs on http://localhost:3000
```

---

## 🏗️ Architecture

```
React 18 Frontend (Port 3000)
    ↓
Node.js + Express API (Port 5000)
├─ 8 API Routes
├─ 12 AI Services
└─ JWT + OAuth Auth
    ↓
MongoDB (Metadata) + Pinecone (Vectors)
    ↓
OpenAI GPT-4o + AWS S3
```

---

## 📡 Main API Endpoints

```bash
POST /api/auth/signup                           # Create account
POST /api/auth/login                            # Login
POST /api/chat                                  # Chat with RAG
POST /api/documents/upload                      # Upload PDF/DOCX
POST /api/case-building/start                   # Start case wizard
POST /api/constitutional-compliance/check       # Check compliance
POST /api/generate/petition                     # Generate petition
```

---

## 🐛 Troubleshooting

### Docker

| Problem | Fix |
|---------|-----|
| Container exits | `docker-compose logs backend` |
| Port in use | Change port in docker-compose.yml or kill process: `lsof -i :3000` |
| Module errors | `docker-compose down -v && docker-compose up --build` |
| Can't reach services | Check `docker-compose ps` - all should show "running" |

### Local Development

| Problem | Fix |
|---------|-----|
| MongoDB error | Verify `MONGODB_URI` in .env |
| OpenAI error | Check `OPENAI_API_KEY` validity and credits |
| Can't reach API | Ensure `REACT_APP_API_URL=http://localhost:5000` in .env |
| CORS error | Clear cache (Ctrl+Shift+Delete) and restart dev server |

---

## 📁 Project Structure

```
Legalyze/
├── backend/                 # Node.js API (routes, services, models)
├── Legalyzing/             # React frontend (components, pages, styles)
├── docker-compose.yml      # Service orchestration
├── .env.example            # Configuration template
└── supporting_documentation/  # Legal reference documents
```

---

## 📚 Full Documentation

- **[System Architecture](./system_documentation.md)** - Technical details
- **[Testing Guide](./backend/TESTING_GUIDE.md)** - How to run tests
- **[.env.example](.env.example)** - All environment variables explained

---

## 🔐 Security

✅ JWT Authentication  
✅ Bcrypt hashing (12-round)  
✅ Rate limiting (5000 req/15min)  
✅ Input validation  
✅ CORS protection  

---

## 📄 License

MIT License - See [LICENSE](LICENSE)

---

**Built with ❤️ at NUST Islamabad**  
**© 2026 Legalyze | Sovereign AI for Pakistani Law**
