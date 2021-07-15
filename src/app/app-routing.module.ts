import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import {DeparmentComponent} from './deparment/deparment.component';

const routes: Routes = [
{path: 'employee', component:EmployeeComponent},
{path: 'department', component:DeparmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
