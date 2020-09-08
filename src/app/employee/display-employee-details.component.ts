import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'display-employee-details',
  templateUrl: './display-employee-details.component.html',
  styleUrls: ['./display-employee-details.component.css'],
})
export class DisplayEmployeeDetailsComponent implements OnInit {
  @Input()
  employee: Employee;
  @Output()
  notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  public selectedId: number;
  // @Input()
  // set employee(val: Employee) {
  //   console.log(
  //     'Previousvalue:' + (this._employee ? this._employee.name : 'Null')
  //   );
  //   console.log('Currentvalue:' + val.name);

  //   this._employee = val;
  // }

  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedId = +this._route.snapshot.paramMap.get('id'); //get angular optional route param
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   let previousEmployee = <Employee>changes.employee.previousValue;
  //   let currentEmployee = <Employee>changes.employee.currentValue;

  //   console.log(
  //     'Previous Value: ' + (previousEmployee ? previousEmployee.name : 'Null')
  //   );
  //   console.log('Current Value: ' + currentEmployee.name);
  // }
}
