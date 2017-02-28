"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent(location) {
        location.onPopState(function () {
            // $('.sidebar-wrapper .nav-container div').removeClass('.moving-tab');
            // $.getScript('../assets/js/material-dashboard-angular.js');
            console.log('pressed back!');
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        if (path == window.location.pathname) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.isLogin = function (path) {
        if (window.location.hash.includes(path)) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.PlatformLocation])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map