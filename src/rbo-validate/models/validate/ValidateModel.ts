import {IValidateModel} from "./IValidateModel";
import {IValidateFieldModel} from "../ValidateField/IValidateFieldModel";
export class ValidateModel implements IValidateModel {
    public fields: Array<IValidateFieldModel>;
    public valid: boolean = true;

    constructor(fields?: Array<IValidateFieldModel>) {
        this.fields = fields ? fields : [];
    }

    public addValidateField(validateField: IValidateFieldModel): void {
        this.fields.push(validateField);
    }



}