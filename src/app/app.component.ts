import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewEmpComponent } from './page/view-emp/view-emp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageEmpComponent,ViewEmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Management-System-Frontend';
}
