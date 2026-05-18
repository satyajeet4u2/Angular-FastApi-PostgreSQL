import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PatientState } from '../store/patient.reducer';

export const selectPatientState = createFeatureSelector<PatientState>('patients');

export const selectAllPatients = createSelector(selectPatientState, (state) => state.patients);

export const selectLoading = createSelector(selectPatientState, (state) => state.loading);

export const selectError = createSelector(selectPatientState, (state) => state.error);

export const selectPatient = createSelector(selectPatientState, (state) => state.patient);
