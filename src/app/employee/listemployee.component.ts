import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Jon',
      gender: 'male',
      email: 'jon@gmail.com',
      phoneNumber: '9874561238',
      contactPreference: 'Email',
      dateOfBirth: new Date('07/24/1998'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/image/jon.png',
    },
    {
      id: 2,
      name: 'Sansa',
      gender: 'female',
      email: 'sansa@gmail.com',
      phoneNumber: '8547692415',
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/14/2000'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/image/sansa.png',
    },
    {
      id: 3,
      name: 'Dany',
      gender: 'female',
      email: 'dany@yahoo.com',
      phoneNumber: '9785641254',
      contactPreference: 'Email',
      dateOfBirth: new Date('08/27/1994'),
      department: 'Computer',
      isActive: true,
      photoPath: 'assets/image/dany.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
