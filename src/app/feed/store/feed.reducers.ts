import {createReducer, on} from "@ngrx/store";
import * as feedAction from "./feed.actions";
import {initialState} from "./feed.state";



export const feedReducers = createReducer(
  initialState,
  on(feedAction.fetchMessage, (state) => ({...state,isLoading: true})),
  on(feedAction.fetchMessageSuccess, (state, {messages}) => ({...state,isLoading: false, messages})),
  on(feedAction.fetchMessageFailure, (state, {error}) => ({...state,isLoading: false, error})),
  on(feedAction.likePost , (state,{id}) => ({
    ...state,
    messages: state.messages.map(message => message.id === id ? {...message, likes : message.likes+1} : message)
  })),
  on(feedAction.likePostSuccess, (state) => ({...state})),
  on(feedAction.likePostFailure, (state, {error}) => ({...state, error})),
  on(feedAction.postMessage, (state) => ({...state})),
  on(feedAction.postMessageSuccess, (state) => ({...state})),
  on(feedAction.postMessageFailure, (state, {error}) => ({...state, error})),
);
