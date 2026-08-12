from typing import Annotated
import auth
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
import models
from database import Base, SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ProjectM")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth.router)
Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/api")
def root():
    return {"message": "ProjectM API is running"}


@app.get("/api/users")
def get_users(db: db_dependency):
    return db.query(models.User).all()