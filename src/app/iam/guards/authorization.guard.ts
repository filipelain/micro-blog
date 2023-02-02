import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, of, switchMap} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../AppState";
import * as aimSelectors from "../store/aim.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {


  constructor(private readonly store: Store<AppState>, private readonly router: Router) {

  }

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
     return this.store
       .pipe(select(aimSelectors.isAuthenticatedSelector))
       .pipe(
          switchMap((isAuthenticated) => {
            if(isAuthenticated){
              return of(true);
            }
             this.router.navigate(['/iam/login']).then()
            return of(false);
          }),
         catchError(() => {
            this.router.navigate(['/iam/login']).then()
            return of(false);
         })
       )
  }

}

