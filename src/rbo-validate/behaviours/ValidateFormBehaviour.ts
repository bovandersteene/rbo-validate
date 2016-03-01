import IDirective = angular.IDirective;
import IScope = angular.IScope;
import IAttributes = angular.IAttributes;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {IValidateFieldModel} from "../models/ValidateField/IValidateFieldModel";
import {IValidateModel} from "../models/validate/IValidateModel";
export class ValidateFormBehaviour implements IDirective {
    public restrice: string = "A";
    public scope: any = {
        validateFieldModel: "<dpValidateModel",
        submit: "&dpSumbit"
    };

    public controller: Function = ValidateFormController;
    public controllerAs: string = "validateFormBehaviourVm";
    public bindToController: boolean = true;

    public link(scope: IScope, formElement: IAugmentedJQuery, attributes: IAttributes, controller: ValidateFormController): void {
        formElement.bind("submit", (): void => {
            let valid: boolean = true;

            controller.validateFieldModel.fields.forEach((field: IValidateFieldModel) => {
                let element: IAugmentedJQuery = formElement.find("[name='" + field.name + "']");

                for (let i: number = 0; i < element.length; i++) {
                    let e: IAugmentedJQuery = angular.element(element[i]);
                    let validField: boolean = field.validate(e.val());

                    valid = valid && validField;
                    let elementFormFields: JQuery = e.parent().hasClass("input-group") ? e.parent() : e.parent();
                    validField ?
                        elementFormFields.removeClass("has-error") :
                        elementFormFields.addClass("has-error");
                }
            });


            controller.validateFieldModel.valid = valid;
            if (controller.validateFieldModel.valid) {
                controller.submit();
            }

        });

        scope.$on("destroy", () => {
            formElement.unbind("submit");
        });
    }
}

export class ValidateFormController {
    public validateFieldModel: IValidateModel;
    public submit: Function;

    constructor() {
    }

}