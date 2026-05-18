import { Routes } from '@angular/router';
import { ListPatient } from './component/list-patient/list-patient';
import { PatientDetails } from './component/patient-details/patient-details';

export const routes: Routes = [
  { path: '', component: ListPatient },
  { path: 'detail/:id', component: PatientDetails },
];
