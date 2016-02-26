import {IValidateFieldModel} from "./IValidateFieldModel";
import {IValidator} from "../../validators/IValidator";
export class ValidateFieldModel implements IValidateFieldModel {
    public value: string;
    public formField: any;
    public valid: boolean = true;

    constructor(public name: string, public validators: Array<IValidator>) {

    }

    public validate(): boolean {
        if (this.formField) {
            let value: string = this.formField.$modelValue;
            this.valid = true;
            this.validators.forEach((validator: IValidator) => this.valid = this.valid && validator.isValid(value));
            return this.valid;
        } else {
            return false;
        }
    }
}