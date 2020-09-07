import { Employee } from './../../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Jon Snow ',
      gender: 'male',
      email: 'jon@gmail.com',
      phoneNumber: '9874561238',
      contactPreference: 'Email',
      dateOfBirth: new Date('07/24/1998'),
      department: '1',
      isActive: true,
      photoPath: 'assets/image/jon.png',
      // password:'',
      // confirmPassword:'',
    },
    {
      id: 2,
      name: 'Sansa Stark',
      gender: 'female',
      email: 'sansa@gmail.com',
      phoneNumber: '8547692415',
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/14/2000'),
      department: '2',
      isActive: true,
      photoPath: 'assets/image/sansa.png',
      // password:'',
      // confirmPassword:'',
    },
    {
      id: 3,
      name: 'Daenerys  Targaryen',
      gender: 'female',
      email: 'dany@yahoo.com',
      phoneNumber: '9785641254',
      contactPreference: 'Email',
      dateOfBirth: new Date('08/27/1994'),
      department: '3',
      isActive: true, 
      photoPath: 'assets/image/dany.png',
      // password:'',
      // confirmPassword:'',
    },
  ];

  constructor() {}

  getAll(): Employee[] {
    return this.employees;
  }

  create(employee: Employee) {
    this.employees.push(employee);
  }
}
