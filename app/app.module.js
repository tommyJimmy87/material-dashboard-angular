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
var testing_1 = require('@angular/http/testing');
var fake_backend_1 = require('./_helpers/fake-backend');
var user_service_1 = require('./_services/user.service');
var authentication_service_1 = require('./_services/authentication.service');
var auth_guard_1 = require('./_guards/auth.guard');
var login_component_1 = require('./login/login.component');
var login_module_1 = require('./login/login.module');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
var common_2 = require('@angular/common');
var app_routes_1 = require('./app.routes');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                login_module_1.LoginModule,
                dashboard_module_1.DashboardModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, login_component_1.LoginComponent],
            providers: [{ provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy },
                auth_guard_1.AuthGuard,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
                // providers used to create fake backend
                fake_backend_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_1.BaseRequestOptions],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map