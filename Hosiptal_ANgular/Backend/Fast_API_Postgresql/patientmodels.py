from db import Base
from sqlalchemy import Column, Integer, String

class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer, index=True)
    mobile = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    gender = Column(String, index=True)
    medicalHistory = Column(String, index=True)