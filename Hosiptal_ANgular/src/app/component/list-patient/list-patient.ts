import { Component, inject } from '@angular/core';
import { Patient } from '../../model/patient-model';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PatientActions from '../../store/patient.action';
import { selectAllPatients } from '../../store/patient.selctor';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientDialogForm } from '../add-patient-dialog-form/add-patient-dialog-form';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-list-patient',
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './list-patient.html',
  styleUrl: './list-patient.scss',
})
export class ListPatient {
  patients$!: Observable<Patient[]>;
  loading$!: Observable<boolean>;
  dialog = inject(MatDialog);

  patient!: Patient;
  label!: string;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor(private store: Store) {
    this.patients$ = this.store.select(selectAllPatients);
    // this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(PatientActions.loadPatients());
    console.log(this.patients$, 'patients$');
  }

  openDialog() {
    this.dialog.open(AddPatientDialogForm, {
       width: '900px',
      height: '500px',
      data: {
        // animal: 'panda',
      },
    });
  }

  openModalUpdate(patient: Patient): void {
    this.dialog.open(AddPatientDialogForm, {
      width: '900px',
      height: '500px',
      data: {
        patient: patient,
        label: 'Update',
      },
    });

    this.patient = patient;
    this.label = 'Update';
  }

  goToDetail(id: number): void {
    console.log(id, 'id');
    this.router.navigate(['detail', id]);
  }

  deleteProduct(id: number) {
    this.store.dispatch(PatientActions.deletePatient({ id }));
  }
}
