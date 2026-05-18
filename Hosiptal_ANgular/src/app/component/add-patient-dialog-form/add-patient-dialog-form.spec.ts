import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientDialogForm } from './add-patient-dialog-form';

describe('AddPatientDialogForm', () => {
  let component: AddPatientDialogForm;
  let fixture: ComponentFixture<AddPatientDialogForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatientDialogForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPatientDialogForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
