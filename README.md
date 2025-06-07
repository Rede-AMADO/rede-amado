# 🌐 Rede AMADO - Backend com FastAPI

Este é o backend da plataforma **Rede AMADO**, um sistema informativo e interativo com foco em atendimentos, serviços, blog, loja e contatos, desenvolvido com **FastAPI** e **SQLite**.

## 🚀 Tecnologias utilizadas

### 🔙 Backend

- **Python 3.10+**
- **FastAPI** — framework web moderno e rápido
- **Uvicorn** — servidor ASGI leve para FastAPI
- **SQLAlchemy** — ORM para manipulação do banco de dados
- **SQLite** — banco de dados leve e local
- **Pydantic** — validação de dados com tipagem forte

### 🎨 Frontend

- **Vite** — bundler moderno e rápido
- **JavaScript** - Logica
- **React** - ??

## 📁 Estrutura do Projeto

```bash
rede_amado/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── routers/
│       ├── atendimento.py
│       ├── usuario.py
│       ├── blog.py
│       ├── servico.py
│       └── contato.py
├── frontend/
│   └── assets/
│   │   ├── logo.png
│   │   ├── news1.png
│   │   ├── news2.jpg
│   │   ├── news3.png
│   │   ├── news4.png
│   │   └── uj-background
│   │
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── AboutTeam.jsx
│       │   ├── Auth.jsx
│       │   ├── CartSidebar.jsx
│       │   ├── ContactForm.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── NewsCard.jsx
│       │   ├── NewsSlider.jsx
│       │   ├── PartnerCard.jsx
│       │   ├── PartnersList.jsx
│       │   ├── ProductCard.jsx
│       │   ├── ProductSlider.jsx
│       │   └── Services.jsx
│       ├── App.css
│       ├── App.jsx
│       └── main.jsx
│
├── rede_amado.db
├── requirements.txt
└── README.md

```

## 🧪 Como executar o projeto

### 🔧 Backend

### 1. Clone o repositório
```bash
git clone https://github.com/Rede-AMADO/rede_amado.git
cd rede_amado/backend
``` 

### 2. Crie e ative um ambiente virtual
```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Rode o servidor
```bash
uvicorn backend.main:app --reload
```
Acesse em: `http://127.0.0.1:8000`

### 5. Documentação automática

Swagger UI: `http://127.0.0.1:8000/docs`

### 🖥️ Frontend

### 1. Acesse a pasta do frontend:
```bash
cd ../frontend
``` 

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento:r
```bash
npm run dev
```
Acesse em: `http://localhost:5173`

## 📌 Funcionalidades implementadas

- CRUD de Atendimentos
- CRUD de Contato
- CRUD de Serviços
- CRUD de Blog/Eventos
- CRUD de Loja (Produtos)
- CRUD de Usuários (Voluntários e Público)
- Conexão com banco SQLite
- Frontend moderno e responsivo
- Documentação automática com Swagger

## ✨ Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar issues ou pull requests.

© 2025 Rede AMADO. Todos os direitos reservados.