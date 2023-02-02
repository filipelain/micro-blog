import {AppState} from "../../AppState";
import {createSelector} from "@ngrx/store";

export const featureSelect = (state: AppState) => state.feed;

export const isLoadingSelector = createSelector(featureSelect, (state) => state.isLoading);
export const messagesSelector = createSelector(featureSelect, (state) => state.messages);
export const errorSelector = createSelector(featureSelect, (state) => state.error);

