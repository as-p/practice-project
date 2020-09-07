import { EmployeeServiceService } from './service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  constructor(
    private _route: ActivatedRoute,
    private empService: EmployeeServiceService
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id'); //retrive the Param value *This is Snapshot Approach.
    this.employee = this.empService.getEmployee(id); // call service and get data by using id.
  }
}
