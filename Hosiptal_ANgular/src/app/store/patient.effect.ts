import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PatientService } from '../service/patient.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PatientActions from '../store/patient.action';

@Injectable()
export class PatientEffect {
  private actions$ = inject(Actions);
  constructor(
    // private actions$: Actions,
    private patientService: PatientService,
  ) {}

  loadPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      mergeMap(() =>
        this.patientService.getAllPatients().pipe(
          map((patients) => PatientActions.loadPatientsSuccess({ patients })),
          catchError((error) => of(PatientActions.loadPatientsFailure({ error }))),
        ),
      ),
    ),
  );

  addPatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.addPatient),
      mergeMap(({ patient }) =>
        this.patientService.addPatient(patient).pipe(
          map((newPatient) => PatientActions.addPatientSuccess({ patient: newPatient })),
          catchError((error) => of(PatientActions.addPatientFailure({ error }))),
        ),
      ),
    ),
  );

  updatePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.updatePatient),
      mergeMap(({ patient }) =>
        this.patientService.updatePatient(patient).pipe(
          map((updatedPatient) => PatientActions.updatePatientSuccess({ patient: updatedPatient })),
          catchError((error) => of(PatientActions.updatePatientFailure({ error }))),
        ),
      ),
    ),
  );

  deletePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.deletePatient),
      mergeMap(({ id }) =>
        this.patientService.deletePatient(+id).pipe(
          map(() => PatientActions.deletePatientSuccess({ id })),
          catchError((error) => of(PatientActions.deletePatientFailure({ error }))),
        ),
      ),
    ),
  );

  findPatientById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatientById),
      mergeMap((action) =>
        this.patientService.findPatientById(Number(action.id)).pipe(
          map((patient) =>
            patient
              ? PatientActions.loadPatientByIdSuccess({ patient })
              : PatientActions.loadPatientByIdFailure({ error: 'Patient not found' }),
          ),
          catchError((error) => of(PatientActions.loadPatientByIdFailure({ error }))),
        ),
      ),
    ),
  );
}
