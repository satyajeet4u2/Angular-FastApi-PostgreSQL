from patientmodels import Patient
from schemas import PatientCreate, PatientUpdate
from sqlalchemy.orm import Session


def create_patient(db: Session, patient: PatientCreate):
    db_patient = Patient(**patient.model_dump())
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient


def get_patients(db: Session, patient_id: int):
    return db.query(Patient).all()

def get_patientById(db: Session, patient_id: int):
    return db.query(Patient).filter(Patient.id == patient_id).first()

def update_patient(db: Session, patient_id: int, patient: PatientUpdate):
    db_patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if db_patient is None:
        return None
    for key, value in patient.model_dump().items():
        setattr(db_patient, key, value)
    db.commit()
    db.refresh(db_patient)
    return db_patient

def delete_patient(db: Session, patient_id: int):
    db_patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if db_patient is None:
        return None
    db.delete(db_patient)
    db.commit()
    return db_patient       
