import { Routes } from '@angular/router';

import { MaterialComponent } from './material/material.component';
import { OverviewComponent } from './overview/overview.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'material', component: MaterialComponent }
];
