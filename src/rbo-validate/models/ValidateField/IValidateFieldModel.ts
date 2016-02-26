import {IValidator} from "../../validators/IValidator";
export interface IValidateFieldModel {
    name: string;
    valid: boolean;
    validators: Array<IValidator>;
    formField: any;

    validate(): boolean;
}