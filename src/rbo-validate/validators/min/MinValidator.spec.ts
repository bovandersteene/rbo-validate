import {IValidator} from "../IValidator";
import {MinValidator} from "./MinValidator";
describe("MinValidator", () => {
    let numberValidator: IValidator = new MinValidator(1);

    describe("on isValid", () => {
        describe("on an empty value", () => {
            it("should return true", () => {
                expect(numberValidator.isValid("")).toBe(true);
            });
        });
        describe("on an number value", () => {
            describe("when it is less than 1", () => {
                it("should return false", () => {
                    expect(numberValidator.isValid(0)).toBe(false);
                });
            });
            describe("when it is less equal to 1", () => {
                it("should return false", () => {
                    expect(numberValidator.isValid(1)).toBe(true);
                });
            });
            describe("when it is greather than 1", () => {
                it("should return false", () => {
                    expect(numberValidator.isValid(2)).toBe(true);
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