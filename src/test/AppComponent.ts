import {ValidateModel} from "../rbo-validate/models/validate/ValidateModel";
import {IValidateModel} from "../rbo-validate/models/validate/IValidateModel";
import {Validators} from "../rbo-validate/validators/Validators";
import {ValidateFieldModel} from "../rbo-validate/models/ValidateField/ValidateFieldModel";
export class AppComponent {
    public controller: any = AppController;
    public template: string = `
    <div class="container">
      <div class="row" >
      <form rbo-sumbit="$ctrl.save()" rbo-validate-model="$ctrl.validateModel">
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >email</label>
            <div class="col-sm-10">
              <input type="text" ng-model="$ctrl.email"
                  class="form-control"
                  name="email"
                />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >required</label>
            <div class="col-sm-10">
              <input type="text"
                  ng-model="$ctrl.requiredField"
                  class="form-control"
                  name="requireField"
                />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >Number</label>
            <div class="col-sm-10">
              <input type="text"
                  ng-model="$ctrl.number"
                  class="form-control"
                  name="numberField"
                />
            </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >Min value: 1</label>
            <div class="col-sm-10">
              <input type="text"
                  ng-model="$ctrl.minField"
                  class="form-control"
                  name="minField"
                />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >max value: 1</label>
            <div class="col-sm-10">
              <input type="text"
                  ng-model="$ctrl.minField"
                  class="form-control"
                  name="maxField"
                />
            </div>
          </div>
      <button class="btn btn-primary" type="submit">save</button>
    </form>
    </div>
  </div>
</div>
  `;
}


class AppController {
    public validateModel: IValidateModel;
    public requiredField: string = "";
    public email: string = "";
    public number: number ;
    public minField: number ;

    constructor() {

        this.validateModel = new ValidateModel([
            new ValidateFieldModel("email", [Validators.requireValidator, Validators.emailValidator]),
            new ValidateFieldModel("requireField", [Validators.requireValidator]),
            new ValidateFieldModel("numberField", [Validators.requireValidator, Validators.numberValidator]),
            new ValidateFieldModel("minField", [Validators.requireValidator, Validators.minValidator(1)]),
            new ValidateFieldModel("maxField", [Validators.requireValidator, Validators.maxValidator(1)])
        ]);
    }

    public save(): void {
        alert("the form has passed the validation!");
    }
}