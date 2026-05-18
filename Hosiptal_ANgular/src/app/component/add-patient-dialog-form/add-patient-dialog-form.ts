import { Component, inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientForm } from '../patient-form/patient-form';
import { Patient } from '../../model/patient-model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient-dialog-form',
  imports: [PatientForm],
  templateUrl: './add-patient-dialog-form.html',
  styleUrl: './add-patient-dialog-form.scss',
})
export class AddPatientDialogForm implements OnInit {
  @Input() patient!: Patient;
  @Input() label!: string;

  data = inject(MAT_DIALOG_DATA);

  constructor(private dialogRef: MatDialogRef<AddPatientDialogForm>) {}

  ngOnInit(): void {
    console.log(this.data, 'patient data');
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
