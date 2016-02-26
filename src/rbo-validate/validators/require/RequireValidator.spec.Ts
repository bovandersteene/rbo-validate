import {IValidator} from "../IValidator";
import {RequireValidator} from "./RequireValidator";
describe("RequireValidator", () => {
    let requireValidator: IValidator = new RequireValidator();

    describe("on isValid", () => {
        describe("on an empty value", () => {
            it("should return false", () => {
                expect(requireValidator.isValid("")).toBe(false);
            });
        });
        describe("on a value", () => {
            it("should return true", () => {
                expect(requireValidator.isValid("test")).toBe(true);
            });
        });
    });
});