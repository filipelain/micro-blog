import {Message} from "../models/Message";

export interface FeedState {
  messages: Array<Message>,
  isLoading: boolean,
  error: string
}


export const initialState: FeedState = {
  messages: [],
  isLoading: false,
  error: ''
};
