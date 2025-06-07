from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .routers import atendimento, usuarios, loja, blog, contato

app = FastAPI(title="API - Núcleo AMADO")

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

app.include_router(atendimento.router)
app.include_router(usuarios.router)
app.include_router(loja.router)
app.include_router(blog.router)
app.include_router(contato.router)