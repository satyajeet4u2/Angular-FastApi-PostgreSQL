from fastapi import FastAPI, Depends, HTTPException
import patientService
import patientmodels
import schemas
from db import get_db, engine
from sqlalchemy.orm import Session  
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
  "http://localhost:4200",
  "http://127.0.0.1:4200"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,    # use ["*"] only for quick dev testing
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.post("/patients/", response_model=schemas.Patient)
def create_new_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    return patientService.create_patient(db=db, patient=patient)

@app.get("/patients/", response_model=list[schemas.Patient])
def read_patients(db: Session = Depends(get_db)):
    return patientService.get_patients(db=db, patient_id=0) 

@app.get("/getPatientById/{patient_id}", response_model=schemas.Patient)
def get_patient_by_id(patient_id: int, db: Session = Depends(get_db)):
    db_patient = patientService.get_patientById(db=db, patient_id=patient_id)
    if db_patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return db_patient

@app.put("/patients/{patient_id}", response_model=schemas.Patient)
def update_patient(patient_id: int, patient: schemas.PatientUpdate, db: Session = Depends(get_db)):
    db_patient = patientService.get_patientById(db=db, patient_id=patient_id)
    if db_patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patientService.update_patient(db=db, patient_id=patient_id, patient=patient)

@app.delete("/patients/{patient_id}", response_model=schemas.Patient)
def delete_patient(patient_id: int, db: Session = Depends(get_db)):   
    db_patient = patientService.get_patientById(db=db, patient_id=patient_id)
    if db_patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patientService.delete_patient(db=db, patient_id=patient_id)      


   
