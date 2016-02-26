import {IValidateFieldModel} from "./IValidateFieldModel";
import {IValidator} from "../../validators/IValidator";
import {ValidateFieldModel} from "./ValidateFieldModel";
import Spy = jasmine.Spy;
describe("ValdiateFieldModel", () => {
    let createModel: Function;
    let validatorMock: IValidator;
    let validatorMock2: IValidator;
    let formFieldMock: any;

    beforeEach(() => {
        validatorMock = jasmine.createSpyObj("IValidator", ["isValid"]);
        validatorMock2 = jasmine.createSpyObj("IValidator", ["isValid"]);
        formFieldMock = jasmine.createSpy("Field");
        formFieldMock.$modelValue = "test";
        createModel = function (): IValidateFieldModel {
            return new ValidateFieldModel("field", [validatorMock, validatorMock2], formFieldMock);
        };
    });


    describe("On validate", () => {
        it("should call the validator", () => {
            let model: ValidateFieldModel = createModel();
            model.validate();
            expect(validatorMock.isValid).toHaveBeenCalledWith("test");
        });

        describe("when no formField is set", () => {
            it("should return false", () => {
                let model: IValidateFieldModel = createModel();
                model.formField = null;
                expect(model.validate()).toBe(false);

            });
            it("should set valid on false", () => {
                let model: IValidateFieldModel = createModel();
                model.formField = null;
                model.validate();
                expect(model.valid).toBe(true);

            });
        });

        describe("when all validators are valid", () => {
            it("should return true", () => {
                let model: IValidateFieldModel = createModel();
                (<Spy>validatorMock.isValid).and.returnValue(true);
                (<Spy>validatorMock2.isValid).and.returnValue(true);
                model.validate();
                expect(model.validate()).toBe(true);
            });
            it("should set valid on rue", () => {
                let model: IValidateFieldModel = createModel();
                (<Spy>validatorMock.isValid).and.returnValue(true);
                (<Spy>validatorMock2.isValid).and.returnValue(true);
                model.validate();
                expect(model.valid).toBe(true);
            });
        });
        describe("when one ore more validators are invalid", () => {
            it("should return true", () => {
                let model: IValidateFieldModel = createModel();
                (<Spy>validatorMock.isValid).and.returnValue(true);
                (<Spy>validatorMock2.isValid).and.returnValue(false);
                model.validate();
                expect(model.validate()).toBe(false);
            });
            it("should set valid on true", () => {
                let model: IValidateFieldModel = createModel();
                (<Spy>validatorMock.isValid).and.returnValue(true);
                (<Spy>validatorMock2.isValid).and.returnValue(false);
                model.validate();
                expect(model.valid).toBe(false);
            });
        });
    });
});