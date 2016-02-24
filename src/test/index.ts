import "angular";
import "angular-route";
import "jquery";
import "bootstrap";

require("bootstrap/dist/css/bootstrap.css");

import IModule = angular.IModule;




export let mod: IModule = angular.module("app", [ ])

angular.bootstrap(document, ["app"], {
    strictDi: true
});

