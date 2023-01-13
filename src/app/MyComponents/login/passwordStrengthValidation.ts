import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | any {
    let PasswordValue: string = control.value || '';
    if (!PasswordValue) {
        return null
    }

    let upperCaseCharacters = /[A-Z]+/g;
    let lowerCaseCharacters = /[a-z]+/g;
    let numberCharacters = /[0-9]+/g;
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (upperCaseCharacters.test(PasswordValue) === false || lowerCaseCharacters.test(PasswordValue) === false || numberCharacters.test(PasswordValue) === false || specialCharacters.test(PasswordValue) === false) {
        return {
            passwordStrength: 'Invalid Password'
        }

    }
}
