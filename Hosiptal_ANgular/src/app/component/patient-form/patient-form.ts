import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Patient } from '../../model/patient-model';
import { Store } from '@ngrx/store';
import * as PatientActions from '../../store/patient.action';
import { MatDialogRef } from '@angular/material/dialog';
import { AddPatientDialogForm } from '../add-patient-dialog-form/add-patient-dialog-form';

@Component({
  selector: 'app-patient-form',
  imports: [ReactiveFormsModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm implements OnInit, OnChanges {
  patientForm: FormGroup;
  @Input() patient!: Patient;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<AddPatientDialogForm>,
  ) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      medicalHistory: [''],
    });
  }

  ngOnInit(): void {
    console.log(this.patient, 'patient Form');
    // If an input patient is provided (edit mode), populate the form
    if (this.patient && Object.keys(this.patient).length) {
      this.patientForm.patchValue({
        name: this.patient.name || '',
        email: this.patient.email || '',
        age: this.patient.age || '',
        gender: this.patient.gender || '',
        mobile: this.patient.mobile || '',
        medicalHistory: this.patient.medicalHistory || '',
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient'] && this.patient) {
      this.patientForm.patchValue({
        name: this.patient.name || '',
        email: this.patient.email || '',
        age: this.patient.age || '',
        gender: this.patient.gender || '',
        mobile: this.patient.mobile || '',
        medicalHistory: this.patient.medicalHistory || '',
      });
    }
  }

  onSubmit() {
    if (!this.patientForm.valid) return;

    const formValue = this.patientForm.value;

    // If we have an existing patient with an id, merge the form values into it
    if (this.patient && typeof this.patient.id === 'number') {
      const updatedPatient: Patient = { ...this.patient, ...formValue } as Patient;
      this.store.dispatch(PatientActions.updatePatient({ patient: updatedPatient }));
    } else {
      const newPatient: Patient = { ...formValue } as Patient;
      this.store.dispatch(PatientActions.addPatient({ patient: newPatient }));
    }

    this.patientForm.reset();

    this.dialogRef.close();
  }
}
