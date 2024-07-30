import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './view-emp.component.html',
  styleUrl: './view-emp.component.css'
})
export class ViewEmpComponent {

  public empList:any;

  constructor(private http:HttpClient){
    this.loadEmployeeTable();
  }

  public loadEmployeeTable(){
    this.http.get("http://localhost:8080/employee/all").subscribe(data => {
      console.log(data)
      this.empList = data;
    })
  }

}
