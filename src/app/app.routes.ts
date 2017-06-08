import { Routes } from '@angular/router';

import { MaterialComponent } from './components/material/material.component';
import { OverviewComponent } from './components/overview/overview.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'material', component: MaterialComponent }
];
