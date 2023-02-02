import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../services/login.service";
import * as aimAction from "./aim.actions";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class AimEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {
  }

  login$ = createEffect(() => this.actions$
    .pipe(
      ofType(aimAction.login),
      mergeMap(({credential}) => this.loginService
        .login(credential)
        .pipe(
          map(user => aimAction.loginSuccess({user})),
          catchError(error => of(aimAction.loginFailure({error: error.message})))
        )
      )
    )
  );



}
