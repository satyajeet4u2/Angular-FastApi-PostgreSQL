import { createReducer, on } from '@ngrx/store';
import * as PatientActions from '../store/patient.action';
import { Patient } from '../model/patient-model';

export interface PatientState {
  patients: Patient[];
  patient: Patient | null;
  loading: boolean;
  error: any;
}

const initialState: PatientState = {
  patients: [],
  patient: null,
  loading: false,
  error: null,
};

export const patientReducer = createReducer(
  initialState,

  on(PatientActions.loadPatients, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({
    ...state,
    patients,
    loading: false,
  })),
  on(PatientActions.loadPatientsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(PatientActions.loadPatientById, (state, { id }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PatientActions.loadPatientByIdSuccess, (state, { patient }) => ({
    ...state,
    patient,
    loading: false,
  })),
  on(PatientActions.loadPatientByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(PatientActions.addPatientSuccess, (state, { patient }) => ({
    ...state,
    patients: [...state.patients, patient],
  })),

  on(PatientActions.updatePatientSuccess, (state, { patient }) => ({
    ...state,
    patients: state.patients.map((p) => (p.id === patient.id ? { ...p, ...patient } : p)),
  })),

  on(PatientActions.deletePatientSuccess, (state, { id }) => ({
    ...state,
    patients: state.patients.filter((p) => p.id !== Number(id)),
  })),
);
