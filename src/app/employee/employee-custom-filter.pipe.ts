import { Employee } from './../models/employee.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'employeeFilter' })
export class EmployeeSearchFilter implements PipeTransform {
  transform(employee: Employee[], serachTearm: string): Employee[] {
    if (!employee || !serachTearm) return employee;

    return employee.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(serachTearm.toLowerCase()) !== -1
    );
  }
}
