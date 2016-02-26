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
                  name="test1"
                />
            </div>
          <div class="form-group">
            <label for="email" class="col-sm-2 control-label" >required</label>
            <div class="col-sm-10">
              <input type="text"
                  ng-model="$ctrl.requiredField"
                  class="form-control"
                  name="test2"
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

    constructor() {

        this.validateModel = new ValidateModel([
            new ValidateFieldModel("test1", [Validators.requireValidator]),
            new ValidateFieldModel("test2", [Validators.requireValidator])
        ]);
    }

    public save(): void {
        console.log("save")
    }

    public isValid(name: string, value: any): boolean{

    }
}