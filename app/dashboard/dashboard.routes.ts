import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { AuthGuard } from './../_guards/auth.guard';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
    { path: 'icons', component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
    { path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
]
