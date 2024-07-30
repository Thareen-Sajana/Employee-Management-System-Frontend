import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewEmpComponent } from './page/view-emp/view-emp.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmpComponent
    },
    {
        path:"view-employee",
        component:ViewEmpComponent
    },
    {
        path:"",
        component:ManageEmpComponent
    }
];
