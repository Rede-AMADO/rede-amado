from pydantic import BaseModel, EmailStr
from typing import Optional, Literal

class AtendimentoBase(BaseModel):
    email: EmailStr
    servico: Literal["Consultoria Acadêmica", "Design Gráfico", "Oficinas de Inclusão"]

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
