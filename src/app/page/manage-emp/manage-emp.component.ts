import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  public employeeObj = {
    "firstName" : undefined,
    "lastName" : undefined,
    "email" : undefined,
    "departmentId" : undefined,
    "roleId": undefined
  }

  public addEmployee(){
    console.log(this.employeeObj)
  }
}
