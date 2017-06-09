import { Component } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
    code = {
        basic: `
            app.routes.ts
        
                import { Routes } from '@angular/router';

                import { MaterialComponent } from './components/material/material.component';
                import { ServicesComponent } from './components/services/services.component';
                import { RoutesComponent } from './components/routes/routes.component';
                
                export const AppRoutes: Routes = [
                    { path: '', redirectTo: 'services', pathMatch: 'full' },
                    { path: 'services', component: ServicesComponent },
                    { path: 'material', component: MaterialComponent },
                    { path: 'routes', component: RoutesComponent }
                    // Add more routes here
                ];
                
                export const RoutableComponents = [
                    MaterialComponent,
                    ServicesComponent,
                    RoutesComponent
                ];
                
            app.module.ts
            
                import { NgModule } from '@angular/core';
                import { RouterModule } from '@angular/router';

                import { AppComponent }  from './app.component';                
                import { AppRoutes, RoutableComponents } from './app.routes';
                
                @NgModule({
                    imports:      [
                        CoreModule, HighlightJsModule,
                        RouterModule.forRoot(AppRoutes)
                    ],
                    declarations: [
                        AppComponent, RoutableComponents
                    ],
                    bootstrap:    [ AppComponent ]
                })
                export class AppModule { }
            `
        ,
        guards: `
            app.routes.ts
        
                import { Routes } from '@angular/router';

                import { MaterialComponent } from './components/material/material.component';
                import { ServicesComponent } from './components/services/services.component';
                import { RoutesComponent } from './components/routes/routes.component';
                
                export const AppRoutes: Routes = [
                    { path: '', redirectTo: 'services', pathMatch: 'full' },
                    { path: 'services', component: ServicesComponent },
                    { path: 'material', component: MaterialComponent },
                    { path: 'routes', component: RoutesComponent }
                    // Add more routes here
                ];
               
            `
    };
}
