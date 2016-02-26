import {RequireValidator} from "./require/RequireValidator";
import {EmailValidator} from "./email/EmailValidator";
export const Validators: any = {
    requireValidator: new RequireValidator(),
    emailValidator: new EmailValidator()
}