import {ValidateModel} from "./ValidateModel";
import {IValidateModel} from "./IValidateModel";
import {IValidateFieldModel} from "../ValidateField/IValidateFieldModel";
import Spy = jasmine.Spy;
describe("ValidateModel", () => {

    let createModel: Function;
    let validateFieldModelMock: IValidateFieldModel;
    let validateFieldModelMock1: IValidateFieldModel;

    beforeEach(() => {
        validateFieldModelMock = jasmine.createSpyObj("validateFieldModelMock", ["validate"]);
        validateFieldModelMock1 = jasmine.createSpyObj("validateFieldModelMock", ["validate"]);

        createModel = function (): IValidateModel {
            return new ValidateModel();
        };
    });



    describe("on validate", () => {
        it("should call the fields validate method", () => {
            let validateModel: ValidateModel = createModel();
            validateModel.fields = [validateFieldModelMock];
            (<Spy>validateFieldModelMock.validate).and.returnValue(true);
            validateModel.validate();
            expect(validateFieldModelMock.validate).toHaveBeenCalled();
        });
        describe("when all fields are valid", () => {
            it("should return true", () => {
                let validateModel: ValidateModel = createModel();
                (<Spy>validateFieldModelMock.validate).and.returnValue(true);
                validateModel.fields = [validateFieldModelMock];
                expect(validateModel.validate()).toBe(true);
            });

            it("should set valid to true", () => {
                let validateModel: ValidateModel = createModel();
                (<Spy>validateFieldModelMock.validate).and.returnValue(true);
                validateModel.fields = [validateFieldModelMock];
                validateModel.validate();
                expect(validateModel.valid).toBe(true);
            });
        });
        describe("when one or more fields are invalid", () => {
            it("should return false", () => {
                let validateModel: ValidateModel = createModel();
                (<Spy>validateFieldModelMock.validate).and.returnValue(true);
                (<Spy>validateFieldModelMock.validate).and.returnValue(false);
                validateModel.fields = [validateFieldModelMock, validateFieldModelMock1];
                expect(validateModel.validate()).toBe(false);
            });

            it("should set valid to true", () => {
                let validateModel: ValidateModel = createModel();
                (<Spy>validateFieldModelMock.validate).and.returnValue(true);
                (<Spy>validateFieldModelMock.validate).and.returnValue(false);
                validateModel.fields = [validateFieldModelMock, validateFieldModelMock1];
                validateModel.validate();
                expect(validateModel.valid).toBe(false);
            });
        });
    });

});