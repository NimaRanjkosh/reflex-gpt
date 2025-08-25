# Reflex GPT

An AI-powered web application built with [**Reflex**](https://reflex.dev/), supporting both **closed-source** (OpenAI) and **open-source** (local/hosted) LLMs.  
It uses **PostgreSQL** for persistence, **Alembic** for database migrations, and is containerized for deployment with **Docker**.

---

## 🚀 Features
- ⚡ Built with **Reflex** (frontend + backend in Python).  
- 🤖 Works with **multiple LLM providers**:  
  - Closed-source APIs (e.g., OpenAI).  
  - Open-source / self-hosted models (e.g., through [LM Studio](https://lmstudio.ai/), oobabooga, vLLM, etc.).  
- 🗄️ PostgreSQL database with **Alembic** migrations.  
- 🐳 Production-ready with **Docker**.  
- 🔧 Easy configuration via `.env`.  
- 🎨 Styled with **Tailwind v4** plugin.  

---

## 📦 Requirements
- Python 3.9+  
- PostgreSQL (Neon or local)  
- Node.js (for Reflex builds)  
- Docker (optional)  

---

## 🔧 Installation

### Create a virtual environment & install dependencies
```bash
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate     # Windows

pip install -r requirements.txt
```

### Set up environment variables
Edit `.env` to configure your model provider:

```env
# Example: OpenAI
API_KEY=your-openai-api-key
BASE_URL=https://api.openai.com/v1

# Example: Local LLM (LM Studio, oobabooga, vLLM, etc.)
LOCAL_URL=http://127.0.0.1:1234/v1

DATABASE_URL=postgresql://user:password@host:port/dbname
```

---

## 🗄️ Database Setup
Run Alembic migrations:

```bash
alembic upgrade head
```

---

## ▶️ Running the App

### Development
```bash
reflex run
```
Default at [http://localhost:3000](http://localhost:3000).

### Production (Docker)
```bash
docker build -f Dockerfile.production -t reflex-gpt .
docker run -p 3000:3000 --env-file .env reflex-gpt
```

---

## ⚙️ Switching Between Closed & Open Source LLMs
- If you set `BASE_URL` + `API_KEY`, the app uses **OpenAI (or other API-compatible services)**.  
- If you set `LOCAL_URL`, the app connects to your **local / self-hosted LLM**.  

This makes it easy to experiment with both worlds.

---

## 📂 Project Structure
```
reflex-gpt/              
  ├─ alembic/            # Database migrations
  ├─ reflex_gpt/         # Main app code (ai.py, UI, logic)
  ├─ rxconfig.py         # Reflex config
  ├─ requirements.txt    
  ├─ alembic.ini         
  ├─ .env                
  ├─ Dockerfile.production
  └─ ...
```

---

## 🤝 Contributing
Contributions welcome! Fork, branch, and PR 🚀

---

## 📜 License
MIT License – free to use and modify.
