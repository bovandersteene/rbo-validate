import {IValidator} from "../IValidator";
import {MaxValidator} from "./MaxValidator";
describe("MaxValidator", () => {
    let numberValidator: IValidator = new MaxValidator(1);

    describe("on isValid", () => {
        describe("on an empty value", () => {
            it("should return true", () => {
                expect(numberValidator.isValid("")).toBe(true);
            });
        });
        describe("on an number value", () => {
            describe("when it is less than 1", () => {
                it("should return true", () => {
                    expect(numberValidator.isValid(0)).toBe(true);
                });
            });
            describe("when it is less equal to 1", () => {
                it("should return true", () => {
                    expect(numberValidator.isValid(1)).toBe(true);
                });
            });
            describe("when it is greather than 1", () => {
                it("should return false", () => {
                    expect(numberValidator.isValid(2)).toBe(false);
                });
            });
        });
        describe("on a non number", () => {
            it("should return false", () => {
                expect(numberValidator.isValid("test")).toBe(false);
            });
        });
    });
});