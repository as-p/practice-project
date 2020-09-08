import { Router } from '@angular/router';
import { EmployeeServiceService } from './service/employee-service.service';
import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent implements OnInit {
  employees: Employee[];
  serachTearm: string;
  employeeDetails: Employee;
  // employeeListChange: Employee;
  // empListTrack = 1;

  constructor(
    private _empService: EmployeeServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this._empService.getAll(); //get all the Service List into local array
    // this.employeeListChange = this.employees[0];
  }

  notifyEvent(notifyValue: Employee) {
    this.employeeDetails = notifyValue; //get parent Component Value into child component
  }

  onClick(employeeID: number) {
    this._router.navigate(['/employee', employeeID]); //Navigate the route with param
  }

  // nextEmployee() {
  //   // console.log(this.employees.length);

  //   if (this.empListTrack < this.employees.length) {
  //     this.employeeListChange = this.employees[this.empListTrack];
  //     this.empListTrack++;
  //   } else {
  //     this.employeeListChange = this.employees[0];
  //     this.empListTrack = 1;
  //   }
  // }
}
