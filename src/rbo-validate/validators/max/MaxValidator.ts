import {IValidator} from "../IValidator";
import * as _ from "lodash";
export class MaxValidator implements IValidator {

    constructor(private maxValue: number) {

    }

    public isValid(value: string): boolean {
        return (!value && value !== 0) || (_.isNumber(value) && value <= this.maxValue);
    }
}