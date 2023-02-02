import {createAction, props} from "@ngrx/store";
import {Message} from "../models/Message";


export enum FeedActionTypes {
  FETCH_MESSAGES = '[Feed] Fetch Messages',
  FETCH_MESSAGES_SUCCESS = '[Feed] Fetch Messages Success',
  FETCH_MESSAGES_FAILURE = '[Feed] Fetch Messages Failure',

  LIKE_POST = '[Feed] Like Post',
  LIKE_POST_SUCCESS = '[Feed] Like Post Success',
  LIKE_POST_FAILURE = '[Feed] Like Post Failure',
  POST_MESSAGE = '[Feed] Post Message',
  POST_MESSAGE_SUCCESS = '[Feed] Post Message Success',
  POST_MESSAGE_FAILURE = '[Feed] Post Message Failure',
}

export const fetchMessage = createAction(FeedActionTypes.FETCH_MESSAGES);
export const fetchMessageSuccess = createAction(
  FeedActionTypes.FETCH_MESSAGES_SUCCESS,
  props<{ messages: Array<Message> }>()
);
export const fetchMessageFailure = createAction(
  FeedActionTypes.FETCH_MESSAGES_FAILURE,
  props<{ error: string }>()
);

export const likePost = createAction(FeedActionTypes.LIKE_POST,
  props<{ id: string }>()
);
export const likePostSuccess = createAction(FeedActionTypes.LIKE_POST_SUCCESS);
export const likePostFailure = createAction(FeedActionTypes.LIKE_POST_FAILURE,
  props<{ error: string }>()
);

export const postMessage = createAction(FeedActionTypes.POST_MESSAGE,
  props<{ message: Message }>());
export const postMessageSuccess = createAction(FeedActionTypes.POST_MESSAGE_SUCCESS);
export const postMessageFailure = createAction(FeedActionTypes.POST_MESSAGE_FAILURE,
  props<{ error: string }>());
