from pydantic import BaseModel  

class  PatientBase(BaseModel):
    name: str
    age: int
    gender: str
    mobile: str 
    email: str
    medicalHistory: str 

class PatientCreate(PatientBase):
    pass   

class PatientUpdate(PatientBase):
    pass 

class Patient(PatientBase):
    id: int

    class Config:
        orm_mode = True