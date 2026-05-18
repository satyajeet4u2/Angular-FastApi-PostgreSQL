import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { patientReducer } from './store/patient.reducer';
import { PatientEffect } from './store/patient.effect';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideEffects([PatientEffect]),
    provideStore({
      patients: patientReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      // logOnly: environment.production,
    }),
    provideHttpClient(),
  ],
};
