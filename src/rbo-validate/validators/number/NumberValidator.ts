import {IValidator} from "../IValidator";
import * as _ from "lodash";
export class NumberValidator implements IValidator {

    public isValid(value: string): boolean {
        return !value || _.isNumber(value);
    }
}