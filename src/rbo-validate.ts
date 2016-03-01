/*export * from "./src/rbo-validate/index";
export * from "./src/rbo-validate/models/validate/IValidateModel";
export * from "./src/rbo-validate/models/validate/ValidateModel";
export * from "./src/rbo-validate/models/ValidateField/ValidateFieldModel";
export * from "./src/rbo-validate/models/ValidateField/IValidateFieldModel";
export * from "./src/rbo-validate/index";*/

import {IValidateModel} from "./rbo-validate/models/validate/IValidateModel";
import  {ValidateModel} from "./rbo-validate/models/validate/ValidateModel";
import  {ValidateFieldModel} from "./rbo-validate/models/ValidateField/ValidateFieldModel";
import  {IValidateFieldModel} from "./rbo-validate/models/ValidateField/IValidateFieldModel";

export default {
    ValidateModel: ValidateModel,
    ValidateFieldModel: ValidateFieldModel
}