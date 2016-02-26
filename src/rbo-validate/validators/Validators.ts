import {RequireValidator} from "./require/RequireValidator";
import {EmailValidator} from "./email/EmailValidator";
import {NumberValidator} from "./number/NumberValidator";
export const Validators: any = {
    requireValidator: new RequireValidator(),
    emailValidator: new EmailValidator(),
    numberValidator: new NumberValidator()
}