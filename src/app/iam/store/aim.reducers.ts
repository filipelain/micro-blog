import {initialState} from "./aim.state";
import {createReducer, on} from "@ngrx/store";
import * as aimAction from "./aim.actions";



export const aimReducers = createReducer(
  initialState,
  on(aimAction.login, (state) => ({...state, isLoading: true})),
  on(aimAction.loginSuccess, (state, {user}) => ({...state, isLoading: false, user})),
  on(aimAction.loginFailure, (state, {error}) => ({...state, isLoading: false, error})),
  on(aimAction.logout, (state) => ({...state, isLoading: false, user: undefined,}))
)
