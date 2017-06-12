import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './services/can-activate.service';

import { MaterialComponent } from './components/material/material.component';
import { ServicesComponent } from './components/services/services.component';
import { RoutesComponent } from './components/routes/routes.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'services', pathMatch: 'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'material', component: MaterialComponent },
    {
        path: 'routes',
        component: RoutesComponent,
        canActivateChild: [CanActivateAuthGuard],
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'login', component: LoginComponent },
        ]
    },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    MaterialComponent,
    ServicesComponent,
    RoutesComponent,
    LoginComponent,
    ErrorComponent
];


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

