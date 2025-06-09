from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import database, models, schemas

router = APIRouter(prefix="/usuarios", tags=["Usuários"])

@router.post("/")
def criar(usuario: schemas.UsuarioCreate, db: Session = Depends(database.get_db)):
    novo = models.Usuario(**usuario.dict())
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo

@router.get("/")
def listar(db: Session = Depends(database.get_db)):
    return db.query(models.Usuario).all()

@router.get("/{email}")
def buscar_por_email(email: str, db: Session = Depends(database.get_db)):
    registro = db.query(models.Usuario).filter(models.Usuario.email == email).first()
    if not registro:
        raise HTTPException(404, "Usuário não encontrado")
    return registro

@router.put("/{email}")
def atualizar(email: str, dados: schemas.UsuarioCreate, db: Session = Depends(database.get_db)):
    registro = db.query(models.Usuario).filter(models.Usuario.email == email).first()
    if not registro:
        raise HTTPException(404, "Usuário não encontrado")
    for k, v in dados.dict().items():
        setattr(registro, k, v)
    db.commit()
    db.refresh(registro)
    return registro

@router.delete("/{email}")
def deletar(email: str, db: Session = Depends(database.get_db)):
    registro = db.query(models.Usuario).filter(models.Usuario.email == email).first()
    if not registro:
        raise HTTPException(404, "Usuário não encontrado")
    db.delete(registro)
    db.commit()
    return {"mensagem": "Usuário deletado com sucesso"}
