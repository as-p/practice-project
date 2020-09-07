import { EmployeeServiceService } from './service/employee-service.service';
import { Employee } from './../models/employee.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public CreateEmployeeComponent: NgForm;
  bsConfig: Partial<BsDatepickerConfig>;
  previePhoto: boolean = false;
  employee: Employee = {
    id: null,
    name: '',
    gender: '',
    email: '',
    phoneNumber: '',
    contactPreference: '',
    dateOfBirth: null,
    department: '',
    isActive: null,
    photoPath: '',
    // password: '',
    // confirmPassword: '',
  };

  department = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR ' },
    { id: 3, name: 'IT ' },
    { id: 4, name: 'Payroll ' },
  ];
  constructor(
    private _empService: EmployeeServiceService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        adaptivePosition: true,
        dateInputFormat: 'DD-MM-YYYY',
        // minDate: new Date(2018, 0, 1),
      }
    );
  }

  togglePhotoPreview() {
    this.previePhoto = !this.previePhoto;
  }
  saveEmployee() {
    this._empService.create(this.employee);
    this._route.navigate(['list']);
  }
}
