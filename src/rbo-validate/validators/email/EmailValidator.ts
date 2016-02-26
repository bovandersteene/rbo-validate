import * as _ from "lodash";
import {IValidator} from "../IValidator";

export class EmailValidator implements IValidator {
    private emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public isValid(value: string): boolean {
        return _.isEmpty(value) || this.emailRegex.test(value);
    }
}