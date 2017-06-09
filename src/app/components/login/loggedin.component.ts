import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from '../../services/login.service';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
    selector: 'login',
    template: `<h1>Logged In</h1>`
})
export class LoginComponent implements OnDestroy {
    private loginSub: Subscription;

    constructor(
        private loginService: LoginService,
        private route: ActivatedRoute,
        private router: Router,
        private userProfileService: UserProfileService) {
    }

    public get isLoggedIn(): boolean {
        return this.userProfileService.isLoggedIn;
    }

    login() {
        this.loginSub = this.loginService
            .login()
            .mergeMap(loginResult => this.route.queryParams)
            .map(qp => qp['redirectTo'])
            .subscribe(redirectTo => {
                console.log(`Successfully logged in`);
                if (this.userProfileService.isLoggedIn) {
                    let url = redirectTo ? [redirectTo] : [ '/' ];
                    this.router.navigate(url);
                }
            });
    }

    logout() {
        this.loginService.logout();
        console.log(`Successfully logged out`);
    }

    ngOnDestroy() {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    }
}
