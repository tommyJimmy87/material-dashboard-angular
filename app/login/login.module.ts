import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthenticationService} from './../_services/authentication.service'
import { MODULE_COMPONENTS, MODULE_ROUTES } from './login.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES)
    ],
    providers: [AuthenticationService],
    declarations: [ MODULE_COMPONENTS ]
})

export class LoginModule{}
