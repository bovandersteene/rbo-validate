import {RequireValidator} from "./require/RequireValidator";
import {EmailValidator} from "./email/EmailValidator";
import {NumberValidator} from "./number/NumberValidator";
import {MinValidator} from "./min/MinValidator";
export const Validators: any = {
    requireValidator: new RequireValidator(),
    emailValidator: new EmailValidator(),
    numberValidator: new NumberValidator(),
    minValidator: (min: number) => new MinValidator(min),
    maxValidator: (max: number) => new NumberValidator(max)
}