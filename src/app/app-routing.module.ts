import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import {EmployeeUpdateComponent } from './employee-update/employee-update.component'
 import {AuthGuard }from './auth/auth.guard'


const routes: Routes = [
  {
  path:'home', component:EmployeeHomeComponent
  },
  {
    path:'employee', component:EmployeeUpdateComponent, canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
