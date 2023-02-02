import {createAction, props} from "@ngrx/store";
import {Credentials} from "../models/Credentials";
import {User} from "../models/Users";



export enum AimActionTypes {
  LOGIN = '[Aim] Login',
  LOGIN_SUCCESS = '[Aim] Login Success',
  LOGIN_FAILURE = '[Aim] Login Failure',
  LOGOUT = '[Aim] Logout',
}

export const login = createAction(AimActionTypes.LOGIN,
  props<{credential: Credentials}>());

export const loginSuccess = createAction(AimActionTypes.LOGIN_SUCCESS,
  props<{user: User}>());

export const loginFailure = createAction(AimActionTypes.LOGIN_FAILURE,
  props<{error: string}>());

export const logout = createAction(AimActionTypes.LOGOUT);

