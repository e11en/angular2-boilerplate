/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { ExampleComponent } from './components/example/example.component';
import { ErrorComponent } from './components/error/error.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'example', pathMatch: 'full' },
    { path: 'example', component: ExampleComponent },
    { path: 'table', component: TableComponent },
    { path: 'form', component: FormComponent },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    ExampleComponent,
    ErrorComponent,
    TableComponent,
    FormComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

