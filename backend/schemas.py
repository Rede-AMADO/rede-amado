from pydantic import BaseModel, EmailStr
from typing import Optional, Literal

class AtendimentoBase(BaseModel):
    nome: str
    email: EmailStr
    telefone: str
    descricao: str
    area: Literal["Juridico", "Saude", "Psicologico"]
    tipo: Literal["Online", "Presencial"]

class AtendimentoCreate(AtendimentoBase):
    pass

class Atendimento(AtendimentoBase):
    id: int

    class Config:
        orm_mode = True

class UsuarioBase(BaseModel):
    nome: str
    email: EmailStr
    senha: str
    tipo: Literal["Voluntario", "Usuario"]

class UsuarioCreate(UsuarioBase):
    pass

class Usuario(UsuarioBase):
    id: int

    class Config:
        orm_mode = True

class ContatoBase(BaseModel):
    nome: str
    email: EmailStr
    mensagem: str

class ContatoCreate(ContatoBase):
    pass

class Contato(ContatoBase):
    id: int

    class Config:
        orm_mode = True
