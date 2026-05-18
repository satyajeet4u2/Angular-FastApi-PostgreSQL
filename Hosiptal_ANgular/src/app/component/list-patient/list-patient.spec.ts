import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatient } from './list-patient';

describe('ListPatient', () => {
  let component: ListPatient;
  let fixture: ComponentFixture<ListPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatient],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
