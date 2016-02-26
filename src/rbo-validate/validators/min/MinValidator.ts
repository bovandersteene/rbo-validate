import {IValidator} from "../IValidator";
import * as _ from "lodash";
export class MinValidator implements IValidator {

    constructor(private minValue: number) {

    }

    public isValid(value: string): boolean {
        return (!value && value !== 0) || (_.isNumber(value) && value >= this.minValue);
    }
}