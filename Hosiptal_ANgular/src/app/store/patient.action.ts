import { createAction, props } from '@ngrx/store';
import { Patient } from '../model/patient-model';

export const loadPatients = createAction('[Patient] Load Patients');

export const loadPatientsSuccess = createAction(
  '[Patient] Load Patients Success',
  props<{ patients: Patient[] }>(),
);

export const loadPatientsFailure = createAction(
  '[Patient] Load Patients Failure',
  props<{ error: any }>(),
);

export const loadPatientById = createAction(
  '[Patient] Load Patient by ID',
  props<{ id: number }>(),
);

export const loadPatientByIdSuccess = createAction(
  '[Patient] Load Patient by ID Success',
  props<{ patient: Patient }>(),
);

export const loadPatientByIdFailure = createAction(
  '[Patient] Load Patient by ID Failure',
  props<{ error: any }>(),
);

export const addPatient = createAction('[Patient] Add Patient', props<{ patient: Patient }>());

export const addPatientSuccess = createAction(
  '[Patient] Add Patient Success',
  props<{ patient: Patient }>(),
);
export const addPatientFailure = createAction(
  '[Patient] Add Patient Failure',
  props<{ error: any }>(),
);

export const updatePatient = createAction(
  '[Patient] Update Patient',
  props<{ patient: Patient }>(),
);

export const updatePatientSuccess = createAction(
  '[Patient] Update Patient Success',
  props<{ patient: Patient }>(),
);

export const updatePatientFailure = createAction(
  '[Patient] Update Patient Failure',
  props<{ error: any }>(),
);

export const deletePatient = createAction('[Patient] Delete Patient', props<{ id: number }>());

export const deletePatientSuccess = createAction(
  '[Patient] Delete Patient Success',
  props<{ id: number }>(),
);

export const deletePatientFailure = createAction(
  '[Patient] Delete Patient Failure',
  props<{ error: any }>(),
);
