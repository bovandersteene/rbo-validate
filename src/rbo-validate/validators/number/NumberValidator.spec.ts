import {IValidator} from "../IValidator";
import {NumberValidator} from "./NumberValidator";
describe("NumberValidator", () => {
    let numberValidator: IValidator = new NumberValidator();

    describe("on isValid", () => {
        describe("on an empty value", () => {
            it("should return true", () => {
                expect(numberValidator.isValid("")).toBe(true);
            });
        });
        describe("on an number value", () => {
            it("should return true", () => {
                expect(numberValidator.isValid("")).toBe(true);
            });
        });
        describe("on the 0 value", () => {
            it("should return true", () => {
                expect(numberValidator.isValid(0)).toBe(true);
            });
        });
        describe("on a non number", () => {
            it("should return true", () => {
                expect(numberValidator.isValid("test")).toBe(false);
            });
        });
    });
});