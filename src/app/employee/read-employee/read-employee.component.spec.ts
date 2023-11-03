import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEmployeeComponent } from './read-employee.component';

describe('ReadEmployeeComponent', () => {
  let component: ReadEmployeeComponent;
  let fixture: ComponentFixture<ReadEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadEmployeeComponent]
    });
    fixture = TestBed.createComponent(ReadEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
