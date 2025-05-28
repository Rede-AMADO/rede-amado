from pydantic import BaseModel, EmailStr
from typing import Optional, Literal


# === ATENDIMENTO ===
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


# === USUÁRIO / VOLUNTÁRIO ===
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


# === PRODUTO (Loja) ===
class LojaBase(BaseModel):
    nome: str
    descricao: str
    preco: float
    categoria: str

class LojaCreate(LojaBase):
    pass

class Loja(LojaBase):
    id: int

    class Config:
        orm_mode = True


# === BLOG / EVENTOS ===
class BlogPostBase(BaseModel):
    titulo: str
    conteudo: str
    data_publicacao: Optional[str] = None 

class BlogPostCreate(BlogPostBase):
    pass

class BlogPost(BlogPostBase):
    id: int

    class Config:
        orm_mode = True


# === CONTATO ===
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
