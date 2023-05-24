import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    
    const emailRegex = RegExp('(?=.*[A-Z])');
    const valid = emailRegex.test(control.value);

    const errors = {
       email: {
            rules: 'doit contenit au moins une majuscule'
        }
    };

    return !valid ? errors : null;
}