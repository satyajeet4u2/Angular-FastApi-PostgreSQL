import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../../model/patient-model';
import { Store } from '@ngrx/store';
import { selectPatient } from '../../store/patient.selctor';
import * as PatientActions from '../../store/patient.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-details',
  imports: [CommonModule],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.scss',
})
export class PatientDetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  Patient$: Observable<Patient | null>;

  constructor(private store: Store) {
    this.Patient$ = this.store.select(selectPatient);
  }

  ngOnInit() {
    const PatientId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(PatientActions.loadPatientById({ id: Number(PatientId) || 0 }));
  }
}
