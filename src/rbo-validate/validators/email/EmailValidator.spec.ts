import {IValidator} from "../IValidator";
import {EmailValidator} from "./EmailValidator";
describe("EmailValidator", () => {
    let emailValidator: IValidator = new EmailValidator();

    describe("on isValid", () => {
        describe("on an empty value", () => {
            it("should return true", () => {
                expect(emailValidator.isValid("")).toBe(true);
            });
        });
        describe("on a partial emailadres like test@mailinator", () => {
            it("should return false", () => {
                expect(emailValidator.isValid("test@mailinator")).toBe(false);
            });
        });
        describe("on a partial emailadres @mailinator.com", () => {
            it("should return false", () => {
                expect(emailValidator.isValid("@mailinator.com")).toBe(false);
            });
        });
        describe("on a valid emailadres like test@mailinator.com", () => {
            it("should return true", () => {
                expect(emailValidator.isValid("test@mailinator.com")).toBe(true);
            });
        });
    });
});