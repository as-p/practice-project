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
  employeeDetails: Employee;
  // employeeListChange: Employee;
  // empListTrack = 1;

  constructor(private _empService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employees = this._empService.getAll();
    // this.employeeListChange = this.employees[0];
  }

  notifyEvent(notifyValue: Employee) {
    this.employeeDetails = notifyValue;
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
