from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import database, models, schemas

router = APIRouter(prefix="/atendimentos", tags=["Atendimentos"])

@router.post("/")
def criar(atendimento: schemas.AtendimentoCreate, db: Session = Depends(database.get_db)):
    novo = models.Atendimento(**atendimento.dict())
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo

@router.get("/")
def listar(db: Session = Depends(database.get_db)):
    return db.query(models.Atendimento).all()

@router.get("/{email}")
def buscar(email: str, db: Session = Depends(database.get_db)):
    registros = db.query(models.Atendimento).filter(models.Atendimento.email == email).all()
    if not registros:
        raise HTTPException(404, "Nenhum atendimento encontrado para este email")
    return registros

@router.put("/{id}")
def atualizar(id: int, dados: schemas.AtendimentoCreate, db: Session = Depends(database.get_db)):
    registro = db.query(models.Atendimento).filter(models.Atendimento.id == id).first()
    if not registro:
        raise HTTPException(404, "Atendimento não encontrado")
    for k, v in dados.dict().items():
        setattr(registro, k, v)
    db.commit()
    db.refresh(registro)
    return registro

@router.delete("/{id}")
def deletar(id: int, db: Session = Depends(database.get_db)):
    registro = db.query(models.Atendimento).filter(models.Atendimento.id == id).first()
    if not registro:
        raise HTTPException(404, "Atendimento não encontrado")
    db.delete(registro)
    db.commit()
    return {"mensagem": "Atendimento deletado com sucesso"}