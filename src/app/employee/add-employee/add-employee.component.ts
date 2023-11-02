import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
    else{
      console.log("Form Not Valid");
      
    }
  }
}
