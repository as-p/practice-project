import { EmployeeServiceService } from './service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  _id: number;
  employee: Employee;
  constructor(
    private _route: ActivatedRoute,
    private empService: EmployeeServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this._id = +this._route.snapshot.paramMap.get('id'); //retrive the Param value *This is Snapshot Approach.
    // this.employee = this.empService.getEmployee(this._id); // call service and get data by using id.
    this._route.paramMap.subscribe((param) => {
      this._id = +param.get('id');
      this.employee = this.empService.getEmployee(this._id);
    }); // retirve the value by using subscribe approach
  }

  viewNextEmployee() {
    if (this._id < 4) {
      ++this._id;
    } else {
      this._id = 1;
    }
    this.route.navigate(['employee/', this._id]);
  }
}
