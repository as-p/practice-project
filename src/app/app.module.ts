import { CanDeactiveGaurdService } from './employee/cemp-can-deactive-gaurd.service';
import { ConfirmPasswordValidator } from './employee/shared/confirm-validator.directive';
import { SelectValidatorDirective } from './employee/shared/select-validator.directive';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employee/listemployee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { DisplayEmployeeDetailsComponent } from './employee/display-employee-details.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateEmployeeComponent,
    SelectValidatorDirective,
    ConfirmPasswordValidator,
    DisplayEmployeeDetailsComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [CanDeactiveGaurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
