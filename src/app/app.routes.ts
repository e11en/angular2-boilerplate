import { Routes } from '@angular/router';

import { MaterialComponent } from './material/material.component';
import { OverviewComponent } from './overview/overview.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'material', pathMatch: 'full' },
    { path: 'material', component: MaterialComponent },
    { path: 'overview', component: OverviewComponent }
];
