from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Atendimento(Base):
    __tablename__ = "atendimentos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email = Column(String)
    tipo = Column(String)
    mensagem = Column(Text)

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email = Column(String, unique=True, index=True)
    tipo = Column(String)
    senha = Column(String, nullable=False)

class Contato(Base):
    __tablename__ = "contatos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    email = Column(String)
    mensagem = Column(Text)
