// define custom submit directive
import IDirective = angular.IDirective;
import IFormController = angular.IFormController;
import IScope = angular.IScope;
import {IValidateModel} from "../models/validate/IValidateModel";
import IAttributes = angular.IAttributes;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {IValidateFieldModel} from "../models/ValidateField/IValidateFieldModel";
import {ValidateFormController} from "./ValidateFormBehaviour";
export class SubmitBehaviour implements IDirective {
    public restrict: string = "A";
    public bindToController: boolean = true;
    public require: Array<String> = ["rboValidateModel", "?form"];

    public link(scope: IScope, formElement: IAugmentedJQuery, attributes: IAttributes, controllers: Array<any>): void {
        let validateFormController: ValidateFormController = controllers[0];
        let validateModel: IValidateModel = validateFormController.validateFieldModel;
        let formController: IFormController = (controllers.length > 1) ? controllers[1] : null;
        validateModel.fields.map((field: IValidateFieldModel) => {
            field.formField = formController[field.name];
        });

    }
}
