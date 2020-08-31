import {
  ValidationErrors,
  AbstractControl,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSelectValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectValidatorDirective,
      multi: true,
    },
  ],
})
export class SelectValidatorDirective implements Validator {
  @Input('appSelectValidator')deptValue;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.deptValue ? { 'defaultSelectedValue': true } : null;
  }
}
