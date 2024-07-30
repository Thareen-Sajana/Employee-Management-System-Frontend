import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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

  public deleteEmployee(employee:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/employee/delete/${employee.id}`,{responseType:'text'}).subscribe(res => {
          this.loadEmployeeTable();
        })
        
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your record is safe :)",
          icon: "error"
        });
      }
    });
    
  }

}
