import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

import { ADULT_AGE } from '../../constants/validators';

export function isAdultValidator(field: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !(control.value instanceof Date)) {
      return null;
    }
    const duration = moment.duration(moment().diff(control.value));
    return duration.asYears() >= ADULT_AGE
      ? null
      : { [field]: { value: control.value } };
  };
}
