import "angular";
import "angular-route";
import "jquery";
import "bootstrap";

require("bootstrap/dist/css/bootstrap.css");

import IModule = angular.IModule;
import {ValidateFormBehaviour} from "./behaviours/ValidateFormBehaviour";

export let mod: IModule = angular.module("reibo.validate", [ ])
    .directive("rboValidateModel", () => new ValidateFormBehaviour());

