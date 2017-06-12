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
        guards: {
            show: false,
            text: `
            app.component.html
            
                <\login></login>
                
            app.module.ts
            
                import \{ NgModule \} from \'@angular/core\';
                import \{ RouterModule \} from \'@angular/router\';
                import \{ HttpModule \} from \'@angular/http\';
                
                import \{ AppRoutingModule, routableComponents \} from \'./app.routes\';
                import \{ CanActivateAuthGuard \} from \'./services/can-activate.service\';
                import \{ UserProfileService \} from \'./services/user-profile.service\';
                import \{ AppComponent \}  from \'./app.component\';
                
                
                \@NgModule(\{
                    imports:      [
                        RouterModule, AppRoutingModule,
                        HttpModule
                    ],
                    providers: [
                        CanActivateAuthGuard, UserProfileService
                    ],
                    declarations: [
                        AppComponent, routableComponents
                    ],
                    bootstrap:    [ AppComponent ]
                \})
                export class AppModule \{ \}
                
                app.routes.ts
                
                    import \{ NgModule \} from '@angular/core';
                    import \{ Routes, RouterModule \} from '@angular/router';
                    
                    import \{ CanActivateAuthGuard \} from './services/can-activate.service';
                    import \{ RoutesComponent \} from './components/routes/routes.component';
                    import \{ LoginComponent \} from './components/login/login.component';
                    
                    export const AppRoutes: Routes = [
                        \{ path: '', redirectTo: 'services', pathMatch: 'full' \},
                        \{
                            path: 'routes',
                            component: RoutesComponent,
                            canActivateChild: [CanActivateAuthGuard],
                            children: [
                                \{ path: 'login', component: LoginComponent \},
                                \{ path: 'login', component: LoginComponent \},
                            ]
                        \},
                    ];
                    
                    export const routableComponents = [
                        MaterialComponent,
                        ServicesComponent,
                        RoutesComponent,
                        LoginComponent
                    ];
                    
                    \@NgModule(\{
                        imports: [RouterModule.forRoot(AppRoutes)],
                        exports: [RouterModule]
                    \})
                    export class AppRoutingModule \{ \}
                    
                login.components.ts
                
                    import \{ Component, OnDestroy \} from \'@angular/core\';
                    import \{ ActivatedRoute, Router \} from \'@angular/router\';
                    import \{ Subscription \} from \'rxjs/Subscription\';
                    
                    import \{ LoginService \} from \'../../services/login.service\';
                    import \{ UserProfileService \} from \'../../services/user-profile.service\';
                    
                     \@\Component\(\{
                        selector\: \'login\',
                        templateurl\: \'./login.component.html\',
                        providers\: \[LoginService\]
                    \}\)
                    \export class LoginComponent implements OnDestroy \{
                        private loginSub: Subscription;
                    
                        constructor(
                            private loginService: LoginService,
                            private route: ActivatedRoute,
                            private router: Router,
                            private userProfileService: UserProfileService) \{
                        \}
                    
                        public get isLoggedIn(): boolean \{
                            return this.userProfileService.isLoggedIn;
                        \}
                    
                        login() \{
                            this.loginSub = this.loginService
                                .login()
                                .mergeMap(loginResult => this.route.queryParams)
                                .map(qp => qp['redirectTo'])
                                .subscribe(redirectTo => {
                                    console.log(\`Successfully logged in\`);
                                    if (this.userProfileService.isLoggedIn) \{
                                        let url = redirectTo ? [redirectTo] : [ '/' ];
                                        this.router.navigate(url);
                                    \}
                                \});
                        \}
                    
                        logout() \{
                            this.loginService.logout();
                            console.log(\`Successfully logged out\`);
                        \}
                    
                        ngOnDestroy() \{
                            if (this.loginSub) \{
                                this.loginSub.unsubscribe();
                            \}
                        \}
                    }
                    
                login.component.html
                
                    \<p *ngIf="isLoggedIn">You are now logged in.\</p>
                    \<button md-raised-button color="primary" (click)="login()" *ngIf="!isLoggedIn">Login\</button>
                    \<button md-raised-button color="primary" (click)="logout()" *ngIf="isLoggedIn">Logout\</button>
                    
                can-activate.service.ts
                
                    import { Injectable } from '@angular/core';
                    import {
                        CanActivate,
                        CanActivateChild,
                        Router,
                        ActivatedRouteSnapshot,
                        RouterStateSnapshot
                    } from '@angular/router';
                    
                    import { UserProfileService } from './user-profile.service';
                    
                    @Injectable()
                    export class CanActivateAuthGuard implements CanActivate, CanActivateChild {
                        constructor(private userProfileService: UserProfileService, private router: Router) { }
                    
                        canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                            return this.canActivate(next, state);
                        }
                    
                        canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                            if (this.userProfileService.isLoggedIn) {
                                return true;
                            }
                            this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
                            return false;
                        }
                    }
                    
                login.service.ts
                
                    import { Injectable } from '@angular/core';
                    import { Observable } from 'rxjs/Observable';
                    
                    import { UserProfileService } from './user-profile.service';
                    
                    @Injectable()
                    export class LoginService {
                        constructor(private userProfileService: UserProfileService) { }
                    
                        login() {
                            return Observable.of(true)
                                .delay(1000)
                                .do(this.toggleLogState.bind(this));
                        }
                    
                        logout() {
                            this.toggleLogState(false);
                        }
                    
                        private toggleLogState(val: boolean) {
                            this.userProfileService.isLoggedIn = val;
                        }
                    }
                    
                user-profile.service.ts
                
                    import { Injectable } from '@angular/core';
    
                    @Injectable()
                    export class UserProfileService {
                        isLoggedIn: boolean = false;
                    }
            `
        }
    };

    toggleCode = function(section: string) {
        this.code[section].show = !this.code[section].show;
    };
}
