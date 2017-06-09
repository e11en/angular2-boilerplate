import { Routes } from '@angular/router';

import { MaterialComponent } from './components/material/material.component';
import { ServicesComponent } from './components/services/services.component';
import { RoutesComponent } from './components/routes/routes.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'services', pathMatch: 'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'routes', component: RoutesComponent },
];

export const RoutableComponents = [
    MaterialComponent,
    ServicesComponent,
    RoutesComponent
];
