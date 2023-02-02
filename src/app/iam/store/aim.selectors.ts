import {AppState} from "../../AppState";
import {createSelector} from "@ngrx/store";


export const featureSelect = (state: AppState) => state.aim;

export const isLoadingSelector = createSelector(featureSelect, (state) => state.isLoading);
export const userSelector = createSelector(featureSelect, (state) => state.user);
export const errorSelector = createSelector(featureSelect, (state) => state.error);

export const userNameSelector = createSelector(userSelector, (user) => user?.name);

export const isAuthenticatedSelector = createSelector(userSelector, (user) => !!user);
