import {
  Validator,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[confirmPasscodeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordValidator,
      multi: true,
    },
  ],
})
export class ConfirmPasswordValidator implements Validator {
  @Input() confirmPasscodeValidator: string;
  validate(control: AbstractControl): ValidationErrors | null {
    const compareToValue = control.parent.get(this.confirmPasscodeValidator);
    if(compareToValue && compareToValue.value !== control.value){
      return 
    }
  }
}
