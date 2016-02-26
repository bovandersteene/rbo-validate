import "angular";
import "angular-route";
import "jquery";
import "bootstrap";

require("bootstrap/dist/css/bootstrap.css");

import IModule = angular.IModule;
import {AppComponent} from "./AppComponent";


import "../rbo-validate/index.ts";

export let mod: IModule = angular.module("app", ["reibo.validate"])
    .component("app", new AppComponent());

angular.bootstrap(document, ["app"], {
    strictDi: true
});

