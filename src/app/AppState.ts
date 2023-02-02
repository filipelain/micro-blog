import {FeedState} from "./feed/store";
import {AimState} from "./iam/store";

export interface AppState {
  feed: FeedState;
  aim: AimState
}
