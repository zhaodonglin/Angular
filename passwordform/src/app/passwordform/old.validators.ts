import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from 'q';

export class OldValidators {
    static invalidPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (control.value !== '1234') {
                    resolve( {invalidPassword:true});
                }
                else {
                    resolve(null);
                }

            },1000);
        });
    }
    static passwordsDonotMatch(control:AbstractControl) {
        let newPass = control.get('new');
        let confirm = control.get('confirm');
        if (newPass.value !== confirm.value) {
            return {donotMatch:true};
        } 
        return null;
    }
}