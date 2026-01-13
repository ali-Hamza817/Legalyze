# Legalyze: Bridging the Judicial Backlog in Pakistan through Agentic Retrieval-Augmented Generation for Automated Judicial Decision Support

**Legalyze** is a state-of-the-art, sovereign agentic framework designed to transform the judicial workflow within Pakistani jurisdictions. By bridging the gap between raw statutory data and actionable legal intelligence, Legalyze reduces the "Research-Drafting Latency" from hours of manual labor to mere minutes of verified AI synthesis.

---

## 🏛️ System Overview
Legalyze utilizes a **Service-Oriented Architecture (SOA)** to ensure that judicial data stays sovereign and secure. The system is designed around a multi-tier logic:

- **Frontend Ecosystem:** A premium React + Vite interface tailored for legal professionals, featuring high-fidelity animations and a dedicated "Case Buildup" environment.
- **Agentic Orchestration Layer:** Driven by GPT-4o, this layer acts as the system's "brain," deconstructing complex legal queries into manageable statutory sub-tasks.
- **Hybrid Persistence Layer:** A synchronized dual-database strategy using **MongoDB** for lexical precision (keywords/statutes) and **Pinecone** for semantic depth (intent/similarity).

---

## ✨ Advanced Product Features

### 🧙‍♂️ Adaptive Case Buildup Wizard
The core of the Legalyze experience. Instead of static forms, the Wizard uses an iterative AI dialogue to guide lawyers through the drafting process:
- **Fact-to-Statute Mapping:** Automatically identifies which sections of the PPC (Pakistan Penal Code) or CrPC apply to the user's narrative.
- **Temporal Analysis:** Automatically constructs a chronological timeline of events based on uploaded documents.
- **Dynamic Draft Generation:** Synthesizes a formal legal petition grounded in verified citations.

### ⚖️ Constitutional Compliance Engine
A novel governance layer that acts as an automated "Reviewing Officer":
- **Article-to-Fact Auditing:** Cross-references the facts of a case against the 1973 Constitution of Pakistan.
- **Violation Flagging:** Automatically identifies potential breaches of fundamental rights (e.g., Article 10-A, Article 25).
- **Loophole Discovery:** Highlights procedural gaps that could lead to case dismissal, suggesting corrective measures.

### 🔍 Structure-Aware Hierarchical Indexing (SAHI)
Unlike generic RAG systems that "break" legal context, our SAHI strategy:
- **Preserves Hierarchy:** Indexes case law and statutes by their logical structure (Part > Chapter > Section > Article).
- **Contextual Anchoring:** Ensures that the AI always understands the "Breadcrumb Path" of a legal citation, eliminating jurisdictional drift.

### 📊 Deep Metadata Extraction
Automatically extracts high-level legal intelligence from unstructured documents:
- **Party Identification:** Distinguishes between Petitioner, Respondent, and relevant witnesses.
- **Forum Validation:** Recommends the correct judicial tier (High Court vs. District Court) based on jurisdictional rules.

---

## 🚀 Getting Started (Clone-to-Run)

### Prerequisites
- **Node.js** (v18 or higher)
- **Database:** MongoDB (Local or Atlas)
- **Vector Store:** Pinecone Account
- **LLM:** OpenAI API Key (GPT-4o recommend)

### 1. Installation

**Clone the repository:**
```bash
git clone https://github.com/CyberHamza/Legalyzing.git
cd Legalyze-FullStack
```

**Step 1: Backend Setup**
```bash
cd backend
npm install
# Create a .env file and add your keys (MONGODB_URI, OPENAI_API_KEY, PINECONE_API_KEY, etc.)
npm run dev
```

**Step 2: Frontend Setup**
```bash
cd ../Legalyzing
npm install
# Ensure src/config.js points to http://localhost:5000
npm run dev
```

### 2. Accessing the Platform
The platform will launch at `http://localhost:5173`. Sign in with your administrator credentials to access the Dashboard and the Case Buildup Wizard.

---

## 📑 Acknowledgments
Project developed and researched at the **Military College of Signals (MCS), National University of Signals and Technology (NUST)**, Rawalpindi, Pakistan.

> [!IMPORTANT]
> This repository contains the framework orchestration and UI. Statutory repositories (Constitution, PPC, CrPC) are processed locally via the SAHI Indexer to ensure data sovereignty.

---
© 2026 Legalyze Team | Sovereign AI for Pakistani Law
