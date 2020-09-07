import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { CanDeactiveGaurdService } from './employee/cemp-can-deactive-gaurd.service';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListemployeeComponent } from './employee/listemployee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: ListemployeeComponent },
  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CanDeactiveGaurdService],
  },
  { path: 'employee/:id', component: EmployeeDetailsComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
