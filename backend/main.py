from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend import models, database
from backend.routers import atendimento, usuarios, contato

app = FastAPI(title="API - Núcleo AMADO")

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
app.include_router(contato.router)