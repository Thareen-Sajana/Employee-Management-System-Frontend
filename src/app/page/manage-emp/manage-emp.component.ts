import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
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

  constructor(private http:HttpClient){}

  public addEmployee(){
    console.log(this.employeeObj)
    this.http.post("http://localhost:8080/employee/add",this.employeeObj).subscribe(res => {
      Swal.fire({
        title: "Successful",
        text: "You add the Employee!",
        icon: "success"
      });
    })
  }
}
