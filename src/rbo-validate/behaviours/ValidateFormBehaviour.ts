import IDirective = angular.IDirective;
import IScope = angular.IScope;
import IAttributes = angular.IAttributes;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {IValidateModel} from "../models/validate/IValidateModel";
import {IValidateFieldModel} from "../models/ValidateField/IValidateFieldModel";
export class ValidateFormBehaviour implements IDirective {
    public restrice: string = "A";
    public scope: any = {
        validateFieldModel: "<rboValidateModel",
        submit: "&rboSumbit"
    };

    public controller: Function = ValidateFormController;
    public controllerAs: string = "validateFormBehaviourVm";
    public bindToController: boolean = true;

    public link(scope: IScope, formElement: IAugmentedJQuery, attributes: IAttributes, controller: ValidateFormController): void {
        formElement.bind("submit", (): void => {
            controller.validateFieldModel.validate();
            controller.validateFieldModel.fields.forEach((field: IValidateFieldModel) => {
                let element: IAugmentedJQuery = formElement.find("[name='" + field.name + "']");
                if (element) {
                    let elementFormFields: JQuery = element.parent().parent();
                    field.valid ?
                        elementFormFields.removeClass("has-error") :
                        elementFormFields.addClass("has-error");
                }
            });
            if (controller.validateFieldModel.valid) {
                controller.submit();
            }

        });
    }
}

export class ValidateFormController {
    public validateFieldModel: IValidateModel;
    public submit: Function;

    constructor() {
    }

}