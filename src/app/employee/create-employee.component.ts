import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
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
    password: '',
    confirmPassword: '',
  };

  department = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR ' },
    { id: 3, name: 'IT ' },
    { id: 4, name: 'Payroll ' },
  ];
  constructor() {}

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
  saveEmployee(empForm) {
    console.log(empForm);
  }
}
