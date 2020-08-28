import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employee/listemployee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListemployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, ListemployeeComponent, CreateEmployeeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
