import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _dialog: MatDialog){}

  addEmployeeForm(){
    this._dialog.open(AddEmployeeComponent)
  }
}
