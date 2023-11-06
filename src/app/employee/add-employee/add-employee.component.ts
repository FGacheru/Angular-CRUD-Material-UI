import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  education: string[] = [
    "Matric",
    "Diploma",
    "Intermidiate",
    "Graduate",
    "Post Graduate"
  ]

  empForm: FormGroup
  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<AddEmployeeComponent>) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: 0,
      package: 0,
    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Succesful'),
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    else {
      console.log("Form Not Valid");

    }
  }
}
