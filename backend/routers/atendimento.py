from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import database, models, schemas

router = APIRouter(prefix="/atendimentos", tags=["Atendimentos"])

@router.post("/")
def criar(at: schemas.AtendimentoCreate, db: Session = Depends(database.get_db)):
    novo = models.Atendimento(**at.dict())
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo
 
@router.get("/")
def listar(db: Session = Depends(database.get_db)):
    return db.query(models.Atendimento).all()

@router.get("/{email}")
def buscar(email: str, db: Session = Depends(database.get_db)):
    registro = db.query(models.Atendimento).filter(models.Atendimento.email == email).first()
    if not registro:
        raise HTTPException(status_code=404, detail="Não encontrado")
    return registro

@router.put("/{email}")
def atualizar(email: str, dados: schemas.AtendimentoCreate, db: Session = Depends(database.get_db)):
    registro = db.query(models.Atendimento).filter(models.Atendimento.email == email).first()
    if not registro:
        raise HTTPException(status_code=404, detail="Não encontrado")
    for k, v in dados.dict().items():
        setattr(registro, k, v)
    db.commit()
    db.refresh(registro)
    return registro

@router.delete("/{email}")
def deletar(email: str, db: Session = Depends(database.get_db)):
    registro = db.query(models.Atendimento).filter(models.Atendimento.email == email).first()
    if not registro:
        raise HTTPException(status_code=404, detail="Não encontrado")
    db.delete(registro)
    db.commit()
    return {"mensagem": "Deletado com sucesso"}
