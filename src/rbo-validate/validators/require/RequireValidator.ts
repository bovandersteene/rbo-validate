import {IValidator} from "../IValidator";
import * as _ from "lodash";
export class RequireValidator implements IValidator {

    public isValid(value: string): boolean {
        return !_.isEmpty(value);
    }
}