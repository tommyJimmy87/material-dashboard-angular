import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }      from '@angular/common';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing } from './app.routes';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:      [
        CommonModule,
        BrowserModule,
        LoginModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [ AppComponent, DashboardComponent, LoginComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthGuard,
        AuthenticationService,
        UserService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
