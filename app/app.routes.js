"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var auth_guard_1 = require('./_guards/auth.guard');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map