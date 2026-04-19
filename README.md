# 🏛️ Legalyze - Agentic AI for Pakistani Legal System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)
[![Open Source](https://img.shields.io/badge/Open%20Source-MIT-brightgreen.svg)](https://github.com/ali-Hamza817/Legalyze)

**A sovereign agentic AI framework transforming judicial workflows in Pakistan through intelligent Retrieval-Augmented Generation (RAG) and constitutional compliance automation.**

---

## 📖 Quick Links

- **⚡ [Quick Start (3 minutes)](#-quick-start-with-docker)** ← **START HERE!**
- 🎯 [What is Legalyze?](#-what-is-legalyze)
- ✨ [Features](#-core-features)
- 📚 [Documentation](#-documentation)
- 🚀 [Deployment](#-deployment)
- 🧪 [Testing](#-testing)

---

## 🎯 What is Legalyze?

**Legalyze** is a research-grade AI system that automates legal work for Pakistani courts by:

- ✅ **Reducing research time** from hours to minutes
- ✅ **Checking constitutional compliance** automatically
- ✅ **Guiding case drafting** through interactive wizards
- ✅ **Preventing AI hallucinations** with mandatory source citations
- ✅ **Understanding legal hierarchy** through structure-aware indexing

## 🚀 Quick Start with Docker

### The fastest way to get Legalyze running (3 minutes)

**Step 1: Prerequisites** (if you don't have these, install them first)
```bash
# Download & Install:
# - Docker Desktop: https://www.docker.com/products/docker-desktop
# - Git: https://git-scm.com/downloads
```

**Step 2: Clone & Configure**
```bash
# Clone the repository
git clone https://github.com/ali-Hamza817/Legalyze.git
cd Legalyze

# Create environment file
cp .env.example .env

# Edit .env and add YOUR API keys (see below)
```

**Step 3: Add Your API Keys**

Edit `.env` file and add:

```env
# 1. MongoDB (Free database)
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/legalyze

# 2. OpenAI (AI engine)
OPENAI_API_KEY=sk-your-key-here

# 3. Pinecone (Vector search database)
PINECONE_API_KEY=pcsk_your-key-here
PINECONE_INDEX_NAME=legal-documents
PINECONE_ENVIRONMENT=us-east-1

# 4. AWS S3 (File storage)
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_S3_BUCKET=your-bucket
AWS_REGION=us-east-1

# 5. Security (Generate random string)
JWT_SECRET=generate-a-random-string-here-make-it-long
```

**Step 4: Run with Docker**

```bash
# Start entire system (backend + frontend + networking)
docker-compose up --build

# That's it! Your system is now running
```

**Step 5: Access**

Open your browser:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

**Login with test credentials:**
```
Email: admin@legalyze.com
Password: Admin@123
```

---

## Where to Get API Keys (All Free Tiers Available)

| Service | Free Tier | Link |
|---------|-----------|------|
| **MongoDB** | 512 MB database | [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) |
| **OpenAI** | Credits included | [platform.openai.com](https://platform.openai.com/account/api-keys) |
| **Pinecone** | 100k vectors free | [pinecone.io](https://www.pinecone.io/) |
| **AWS S3** | 5 GB free | [aws.amazon.com/s3](https://aws.amazon.com/s3/pricing/) |

---

## ✨ Core Features

### 🧙 **Adaptive Case Buildup Wizard**
- 7-step interactive AI guidance
- Automatic statute identification
- Temporal timeline generation
- Professional petition drafting

### ⚖️ **Constitutional Compliance Engine**
- Automated Article-by-Article auditing
- Fundamental rights violation detection
- Procedural gap identification
- Smart recommendations

### 🔍 **Retrieval-Augmented Generation (RAG)**
- Dual-database search (semantic + lexical)
- Zero hallucinations (all claims cited)
- Structure-aware legal indexing
- Context-preserving retrieval

### 📊 **Deep Document Analysis**
- Party identification (Petitioner, Respondent)
- Forum validation (Court tier recommendation)
- Metadata extraction from PDFs/DOCs
- Multi-modal document processing

---

## 📊 Architecture at a Glance

```
┌──────────────────────────────────────┐
│   React 18 Frontend (Port 3000)      │
├──────────────────────────────────────┤
│   Node.js + Express API (Port 5000)  │
│   - 8 API Routes                     │
│   - 12 AI Services                   │
│   - JWT + OAuth Authentication       │
├──────────────────────────────────────┤
│   Persistent Data Layer              │
│   - MongoDB (Metadata)               │
│   - Pinecone (Vector Embeddings)     │
├──────────────────────────────────────┤
│   External  AI & Services            │
│   - OpenAI GPT-4o                    │
│   - AWS S3                           │
└──────────────────────────────────────┘
```

---

## 📡 API Endpoints

All endpoints require JWT authentication (except health check)

```bash
# Health Check
GET /api/health

# Authentication
POST /api/auth/signup
POST /api/auth/login
GET /api/auth/me
POST /api/auth/logout

# Chat & RAG
POST /api/chat              # Send message with document context
GET /api/chat/conversations
GET /api/chat/conversations/:id

# Documents
POST /api/documents/upload   # Upload PDF/DOCX
GET /api/documents           # List your documents
DELETE /api/documents/:id

# Case Building Wizard
POST /api/case-building/start
PUT /api/case-building/:id/progress
GET /api/case-building/:id

# Compliance Checking
POST /api/constitutional-compliance/check
GET /api/constitutional-compliance/:id

# Document Generation
POST /api/generate/petition
POST /api/smart-generate/strategy
```

---

## 💻 Develop Locally (Without Docker)

### Backend Setup
```bash
cd backend
npm install

# Create .env file
cp ../.env .env

# Run server
npm run dev
# Runs on http://localhost:5000
```

### Frontend Setup
```bash
cd Legalyzing
npm install

# Start development server
npm run dev
# Runs on http://localhost:3000
```

---

## 🐳 Docker Commands

```bash
# Start services
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop everything
docker-compose down

# Remove volumes (clean slate)
docker-compose down -v

# Access backend shell
docker-compose exec backend sh
```

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [system_documentation.md](./system_documentation.md) | Complete technical specifications |
| [.env.example](./.env.example) | Environment variables template |
| [supporting_documentation/](./supporting_documentation/) | Legal reference documents |

---

## 🧪 Testing

```bash
cd backend

# Test Pinecone integration
node scripts/testPineconeRAG.js

# Test constitutional compliance
node scripts/testEnhancedCompliance.js

# Test case generation
node scripts/testGenerate.js
```

---

## 🔐 Security Features

✅ **JWT Authentication** - Secure token-based sessions  
✅ **Bcrypt Passwords** - 12-round hashing  
✅ **Rate Limiting** - 5000 requests/15 min (global)  
✅ **Input Validation** - All endpoints validated  
✅ **CORS Protection** - Cross-origin requests controlled  
✅ **Environment Secrets** - All keys in .env  

---

## 📁 Project Structure

```
Legalyze/
├── backend/                    # Node.js + Express API
│   ├── Dockerfile             
│   ├── services/              # AI & Business Logic (12 services)
│   ├── routes/                # API Endpoints (8 routes)
│   ├── models/                # Database Schemas (10 models)
│   ├── scripts/               # Testing utilities
│   └── config/                # Configuration files
│
├── Legalyzing/                # React + Vite Frontend
│   ├── Dockerfile
│   ├── src/components/        # Reusable Components
│   ├── src/pages/             # Page-level Components
│   └── src/styles/            # Theme & Styling
│
├── supporting_documentation/  # Legal Reference Documents
│   ├── Constitution of Pakistan.txt
│   ├── Pakistan Panel Code.pdf
│   ├── THE CODE OF CRIMINAL PROCEDURE, 1898.pdf
│   ├── THE CODE OF CIVIL PROCEDURE, 1908.pdf
│   └── [More legal documents...]
│
├── docker-compose.yml         # Service Orchestration
├── .env.example               # Configuration Template
└── README.md                  # This File
```

---

## 🐛 Troubleshooting

### Docker Issues

| Problem | Solution |
|---------|----------|
| **Port already in use** | Change port in `docker-compose.yml` or stop conflicting services |
| **Container exits** | Check logs: `docker-compose logs backend` |
| **Module errors** | Rebuild: `docker-compose up --build` |
| **Connection refused** | Ensure all services are healthy: `docker-compose ps` |

### API Issues

| Problem | Solution |
|---------|----------|
| **MongoDB error** | Check `MONGODB_URI` in `.env` |
| **OpenAI error** | Verify `OPENAI_API_KEY` is valid and has credits |
| **Pinecone error** | Check `PINECONE_API_KEY` and index exists |
| **S3 error** | Verify `AWS_S3_BUCKET` name is correct |

### Frontend Issues

| Problem | Solution |
|---------|----------|
| **Cannot reach API** | Check `REACT_APP_API_URL` in `.env` |
| **Blank page** | Clear cache: `Ctrl+Shift+Delete` |
| **CORS error** | Ensure backend is running on http://localhost:5000 |

---

## 📜 License

MIT License - See LICENSE file for details

---

## 🎓 Research Paper

**Thesis Title**: *Bridging the Judicial Backlog in Pakistan through Agentic Retrieval-Augmented Generation for Automated Judicial Decision Support*

**Institution**: National University of Sciences and Technology (NUST)  
**Location**: Islamabad, Pakistan  
**Year**: 2024-2026  

This system demonstrates:
- Agentic AI for specialized domains
- Constitutional compliance automation
- Multi-modal document processing
- Retrieval-Augmented Generation (RAG)
- Legal knowledge representation


---

## 🎯 Overview

**Legalyze** is a sovereign agentic AI framework designed to transform judicial workflows in Pakistan by automating legal research, document analysis, and case drafting through intelligent Retrieval-Augmented Generation (RAG).

**Problem Solved**: Legal research in Pakistan is labor-intensive, taking days of manual work. Legalyze reduces this from hours of manual labor to mere **minutes of verified AI synthesis** with zero hallucinations.

### 🔑 Key Impact
- ✅ **Reduces Research-Drafting Latency**: Hours → Minutes
- ✅ **Constitutional Compliance**: Automated Article-by-Article auditing
- ✅ **Smart Case Buildup**: 7-step interactive AI-guided wizard
- ✅ **Dual-Database RAG**: Semantic (Pinecone) + Lexical (MongoDB) retrieval
- ✅ **Zero Hallucinations**: All AI claims backed by source citations
- ✅ **Production Ready**: Full Docker support for easy deployment

---

## ⚡ Quick Start with Docker (Recommended)

### For Reviewers & Researchers - **3-Minute Setup**

```bash
# 1. Clone the repository
git clone https://github.com/ali-Hamza817/Legalyze.git
cd Legalyze

# 2. Create environment file
cp .env.example .env
# Edit .env and add your API keys (see section below)

# 3. Start with Docker Compose
docker-compose up --build

# 4. Open in browser
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# API Health: http://localhost:5000/api/health

# 5. Sign in with test credentials:
# Email: admin@legalyze.com
# Password: Admin@123
```

**That's it!** Your entire Legalyze stack is now running. No need to manually install Node.js, manage databases, or configure anything else.

### What You Need (For Docker)

| Requirement | Get It | Cost |
|-------------|--------|------|
| Docker Desktop | [Download](https://www.docker.com/products/docker-desktop) | Free |
| MongoDB Atlas | [Create Account](https://www.mongodb.com/cloud/atlas) | Free tier |
| OpenAI API Key | [Get Key](https://platform.openai.com/account/api-keys) | ~$5 starter |
| Pinecone Account | [Sign Up](https://www.pinecone.io/) | Free tier |
| AWS S3 Bucket | [Create Bucket](https://console.aws.amazon.com/s3/) | Free tier |

### Setup Environment Variables

Create `.env` in the project root:

```env
# Required - Database
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/legalyze

# Required - AI & Vector Database
OPENAI_API_KEY=sk-your-openai-key
PINECONE_API_KEY=pcsk_your-pinecone-key
PINECONE_INDEX_NAME=legal-documents
PINECONE_ENVIRONMENT=us-east-1

# Required - File Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=your-bucket-name
AWS_REGION=us-east-1

# Security
JWT_SECRET=your_super_secret_jwt_key_make_it_long

# Server Configuration
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000
```

> 💡 **Pro Tip**: Copy `.env.example` to `.env` - it has all the variables you need with explanations.

---

## ✨ Core Features

### 🧙‍♂️ Adaptive Case Buildup Wizard
- **Iterative AI Dialogue**: Step-by-step case preparation guided by AI
- **Fact-to-Statute Mapping**: Auto-identifies which PPC/CrPC sections apply
- **Temporal Analysis**: Automatically builds chronological timelines from documents
- **Dynamic Petition Generation**: Creates formal legal documents with verified citations

### ⚖️ Constitutional Compliance Engine
- **Article-by-Article Auditing**: Cross-references facts vs. 1973 Constitution
- **Violation Detection**: Automatically flags fundamental rights breaches
- **Loophole Discovery**: Identifies procedural gaps that could cause dismissal
- **Intelligent Recommendations**: Suggests corrective legal strategies

### 🔍 Structure-Aware Hierarchical Indexing (SAHI)
- Preserves legal hierarchy (Part > Chapter > Section > Article)
- Eliminates context drift typical in generic RAG systems
- Maintains jurisdictional precision with breadcrumb tracking

### 📊 Deep Metadata Extraction
- **Party Identification**: Distinguishes Petitioner, Respondent, Witnesses
- **Forum Validation**: Recommends correct judicial tier
- **Intelligence Extraction**: Pulls legal insights from unstructured documents

### 🤖 Agentic RAG System
- **Intent Classification**: Intelligently routes legal queries
- **Parallel Retrieval**: Simultaneous Pinecone (semantic) + MongoDB (lexical) search
- **Context Synthesis**: Combines retrieved documents with legal reasoning
- **Hallucination Prevention**: Every AI claim backed by source documents

---

## 💻 Local Development Setup

### Backend (Node.js + Express)

```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp ../.env .env

# Seed database with test users
npm run seed

# Run in development mode (with auto-reload via nodemon)
npm run dev

# Run in production mode
npm start
```

**Backend runs on**: http://localhost:5000

### Frontend (React + Vite)

```bash
cd Legalyzing

# Install dependencies
npm install

# Start Vite development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Frontend runs on**: http://localhost:3000

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│  Frontend: React 18 + Vite + Material-UI                │
│  (Served on port 3000)                                  │
├─────────────────────────────────────────────────────────┤
│  Backend: Node.js + Express API                         │
│  (API Server on port 5000)                              │
│  ├─ Authentication (JWT + Google OAuth)                 │
│  ├─ 12 Specialized Services                             │
│  ├─ 8 API Routes                                        │
│  └─ Middleware (Rate Limiting, Validation, Auth)        │
├─────────────────────────────────────────────────────────┤
│  Data Persistence                                       │
│  ├─ MongoDB Atlas (User data, conversations, metadata)  │
│  └─ Pinecone (Vector embeddings - 1024 dimensions)      │
├─────────────────────────────────────────────────────────┤
│  External Integrations                                  │
│  ├─ OpenAI GPT-4o (AI Intelligence)                    │
│  ├─ AWS S3 (Document Storage)                           │
│  └─ Google OAuth 2.0 (Authentication)                   │
└─────────────────────────────────────────────────────────┘
```

### Key Components

| Component | Purpose | Technology |
|-----------|---------|-----------|
| **Frontend** | User Interface | React 18, Vite, Material-UI |
| **API Server** | Backend Logic | Node.js, Express 4, Mongoose |
| **Document Processing** | PDF/DOCX Parsing | Puppeteer, Tesseract, Mammoth |
| **AI Engine** | Legal Intelligence | OpenAI GPT-4o, LegalAgentService |
| **Vector Search** | Semantic Retrieval | Pinecone (4 namespaces) |
| **Database** | Metadata & Search | MongoDB Atlas |
| **Storage** | Document Persistence | AWS S3 |
| **Authentication** | User Management | JWT, Google OAuth 2.0 |

---

## 📡 API Documentation

### Health Check
```bash
GET /api/health
Response: { success: true, message: "API is running" }
```

### Authentication
```bash
POST /api/auth/signup              # Create new account
POST /api/auth/login               # Login with email/password
GET /api/auth/me (Protected)       # Get current user
POST /api/auth/logout (Protected)  # Logout
```

### Chat & RAG
```bash
POST /api/chat                           # Send message with RAG
GET /api/chat/conversations              # Get all conversations
GET /api/chat/conversations/:id          # Get specific conversation
DELETE /api/chat/conversations/:id       # Delete conversation
```

### Documents
```bash
POST /api/documents/upload    # Upload document (PDF/DOCX)
GET /api/documents            # List user's documents
GET /api/documents/:id        # Get document metadata
DELETE /api/documents/:id     # Delete document
```

### Case Building
```bash
POST /api/case-building/start             # Start new case
PUT /api/case-building/:id/progress       # Update case progress
GET /api/case-building/:id                # Get case details
```

### Legal Document Generation
```bash
POST /api/generate/petition        # Generate legal petition
POST /api/smart-generate/strategy  # Generate case strategy
```

### Constitutional Compliance
```bash
POST /api/constitutional-compliance/check   # Check compliance
GET /api/constitutional-compliance/:id      # Get compliance report
```

---

## 🧪 Testing

### Run Test Scripts

```bash
cd backend

# Test Pinecone Vector DB Integration
node scripts/testPineconeUpload.js
node scripts/testPineconeRAG.js
node scripts/testPineconeDelete.js

# Test Constitutional Compliance
node scripts/testEnhancedCompliance.js

# Test Case Generation
node scripts/testGenerate.js

# Test Login Flow
node scripts/testLogin.js
```

### Using Docker Compose to Run Tests

```bash
# Access backend container
docker-compose exec backend sh

# Run test inside container
npm run test
# or
node scripts/testPineconeRAG.js
```

---

## 🐳 Docker Commands Reference

### Start Services
```bash
# Build and start all services
docker-compose up --build

# Run in background (detached mode)
docker-compose up -d

# Start specific service only
docker-compose up backend
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend

# Last 100 lines
docker-compose logs --tail=100 backend
```

### Service Management
```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Restart services
docker-compose restart

# View running services status
docker-compose ps
```

### Access Container Shell
```bash
# Backend shell
docker-compose exec backend sh

# Frontend shell
docker-compose exec frontend sh
```

### Rebuild Containers
```bash
# Rebuild from scratch
docker-compose up --build

# Rebuild specific service
docker-compose build --no-cache backend
```

---

## 🔐 Environment Variables Guide

See `.env.example` for complete reference.

### Essential Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `MONGODB_URI` | Database connection | `mongodb+srv://user:pass@cluster...` |
| `OPENAI_API_KEY` | AI Engine key | `sk-...` |
| `PINECONE_API_KEY` | Vector DB key | `pcsk_...` |
| `AWS_ACCESS_KEY_ID` | S3 access | From AWS IAM |
| `JWT_SECRET` | Auth signing key | Random secure string |

### Optional Variables

| Variable | Purpose |
|----------|---------|
| `GOOGLE_CLIENT_ID` | Google OAuth login |
| `EMAIL_USER` | Email notifications |
| `CALLBACK_URL` | OAuth redirect URL |

---

## 📁 Project Structure

```
Legalyze/
├── backend/                          # Node.js + Express API
│   ├── config/                       # Database & service configs
│   ├── models/                       # MongoDB schemas (10 models)
│   ├── routes/                       # API endpoints (8 routes)
│   ├── services/                     # Business logic (12 services)
│   ├── middleware/                   # Auth, validation, rate limiting
│   ├── scripts/                      # Testing & utility scripts
│   ├── server.js                    # Express app entry point
│   └── package.json
│
├── Legalyzing/                       # React + Vite Frontend
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   ├── pages/                   # Page-level components
│   │   ├── styles/                  # Material-UI theme & CSS
│   │   ├── types/                   # TypeScript types
│   │   ├── utils/                   # Helper functions
│   │   └── App.jsx
│   ├── public/                       # Static assets
│   ├── vite.config.js               # Vite configuration
│   └── package.json
│
├── docker-compose.yml                # Docker orchestration
├── .env.example                      # Environment template
├── .dockerignore                     # Docker build ignore
├── README.md                         # This file
└── system_documentation.md           # Detailed technical docs
```

---

## 🐛 Troubleshooting

### Docker Issues

| Problem | Solution |
|---------|----------|
| Port 3000/5000 in use | Kill process: `lsof -i :3000` or change docker-compose.yml ports |
| Container exits | Check logs: `docker-compose logs backend` |
| Module errors | Remove node_modules: `docker-compose down -v && docker-compose up --build` |
| Network issues | Ensure service names match in docker-compose.yml: `backend`, `frontend` |

### Backend Issues

| Problem | Solution |
|---------|----------|
| MongoDB connection failed | Check MONGODB_URI in .env |
| OpenAI API error | Verify OPENAI_API_KEY is valid |
| Pinecone not indexing | Check PINECONE_API_KEY and index exists |
| S3 upload fails | Verify AWS credentials and bucket name |

### Frontend Issues

| Problem | Solution |
|---------|----------|
| Cannot reach backend | Ensure REACT_APP_API_URL matches backend URL |
| CORS errors | Check backend CORS configuration and frontend URL |
| Blank page | Clear cache: Ctrl+Shift+Delete, restart dev server |
| Build fails | Delete node_modules & dist: `rm -rf node_modules dist && npm install` |

---

## 📚 Documentation

- **[System Architecture](./system_documentation.md)** - Detailed component interactions
- **[Backend README](./backend/README.md)** - API specifications
- **[Testing Guide](./backend/TESTING_GUIDE.md)** - Test procedures
- **[Comprehensive Analysis](./COMPREHENSIVE_ARCHITECTURE_ANALYSIS.md)** - Technical deep dive

---

## 🎓 For Researchers & Reviewers

### Quick Research Setup

```bash
# 1. Clone repo
git clone https://github.com/ali-Hamza817/Legalyze.git

# 2. Copy environment template
cd Legalyze
cp .env.example .env

# 3. Add your API keys to .env

# 4. Start with Docker (no manual installation!)
docker-compose up --build

# 5. Access the system
# Frontend: http://localhost:3000
# API: http://localhost:5000/api/health
```

### Key Files for Research

- **AI Orchestration**: `backend/services/LegalAgentService.js`
- **RAG Implementation**: `backend/services/RAGService.js`
- **Compliance Engine**: `backend/services/ComplianceService.js`
- **Case Wizard**: `backend/routes/caseBuilding.js`
- **Document Processing**: `backend/services/DocumentProcessingService.js`

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Make your changes
4. Commit: `git commit -m 'Add YourFeature'`
5. Push: `git push origin feature/YourFeature`
6. Submit a Pull Request

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

## 🔬 Research Paper

Developed as a Master's thesis on **Agentic AI for Pakistani Legal Systems** at:

**Military College of Signals (MCS)**  
National University of Signals and Technology (NUST)  
Rawalpindi, Pakistan  

**Thesis Title**: *Bridging the Judicial Backlog in Pakistan through Agentic Retrieval-Augmented Generation for Automated Judicial Decision Support*

**Academic Year**: 2024-2026

For academic inquiries, please contact the development team.

---

## 📞 Support & Resources

### Documentation
- 📖 **Full System Docs**: [system_documentation.md](./system_documentation.md)
- 🏗️ **Architecture**: [COMPREHENSIVE_ARCHITECTURE_ANALYSIS.md](./COMPREHENSIVE_ARCHITECTURE_ANALYSIS.md)
- 🧪 **Testing Guide**: [backend/TESTING_GUIDE.md](./backend/TESTING_GUIDE.md)

### Helpful Links
- 🐳 [Docker Docs](https://docs.docker.com/)
- 📚 [MongoDB Docs](https://docs.mongodb.com/)
- 📌 [Pinecone Docs](https://docs.pinecone.io/)
- 🤖 [OpenAI API Docs](https://platform.openai.com/docs/)

### Debugging

```bash
# Docker logs
docker-compose logs -f backend

# Backend Node logs
npm run dev

# Frontend Vite logs
npm run dev

# Frontend browser console
Open DevTools: F12 or Ctrl+Shift+I
```

---

## ✅ Status

- [x] Docker Support ✅
- [x] Production Ready ✅
- [x] API Documentation ✅
- [x] Testing Suite ✅
- [x] Open Source ✅

---

## 📝 Acknowledgments

Project developed and researched at **National University of Sciences and Technology (NUST)**, Islamabad, Pakistan.

> [!IMPORTANT]
> This repository contains the complete framework orchestration and UI. Legal statutory repositories (Constitution, PPC, CrPC) are processed locally via the SAHI Indexer to ensure **data sovereignty**.

---

**© 2026 Legalyze Team | Sovereign AI for Pakistani Law**  
**Last Updated**: April 19, 2026  
**Version**: 1.0.0 - Production Ready ✅  
**License**: MIT
