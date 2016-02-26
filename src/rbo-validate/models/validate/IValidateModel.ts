import {ValidateFieldModel} from "../ValidateField/ValidateFieldModel";
import {IValidateFieldModel} from "../ValidateField/IValidateFieldModel";
export interface IValidateModel {
    valid: boolean;
    fields: Array<IValidateFieldModel>;

    addValidateField(validateField: ValidateFieldModel): void;
    validate(): boolean;
}