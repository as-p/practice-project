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
  // @Input() confirmPasscodeValidator: string;
  // validate(control: AbstractControl): ValidationErrors | null {
  //   const compareToValue = control.parent.get(this.confirmPasscodeValidator);
  //   if (compareToValue && compareToValue.value !== control.value) {
  //     return { notEqual: true };
  //   }
  //   return null;
  // }
  validate(passwordGroup: AbstractControl): ValidationErrors | null {
    const passControl = passwordGroup.get('password');
    const confirmPassControl = passwordGroup.get('confirmPassword');
    // console.log(passControl);
    // console.log(confirmPassControl);

    if (
      passControl &&
      confirmPassControl &&
      passControl.value !== confirmPassControl.value
    ) {
      return { notEqual: true };
    }
    return null;
  }
}
