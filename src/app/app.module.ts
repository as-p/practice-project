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

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateEmployeeComponent,
    SelectValidatorDirective,
    ConfirmPasswordValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
