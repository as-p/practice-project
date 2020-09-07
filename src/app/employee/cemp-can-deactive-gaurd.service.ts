import { Injectable } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanDeactiveGaurdService
  implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.CreateEmployeeComponent.dirty) {
      return confirm('Are you sure you want to discard your Changes');
    }
    return true;
  }
}
