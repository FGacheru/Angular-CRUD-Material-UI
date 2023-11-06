import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './employee/read-employee/read-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ReadEmployeeComponent) readEmployeeComponent?: ReadEmployeeComponent;

  constructor(private _dialog: MatDialog){
  }

  addEmployeeForm(){
    const dialogRef= this._dialog.open(AddEmployeeComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.readEmployeeComponent?.getEmployeeList();
        }
      },
      error: console.error,
      
    })
  }
}
