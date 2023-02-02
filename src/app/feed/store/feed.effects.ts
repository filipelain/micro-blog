import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import * as feedActions from "./feed.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {FeedService} from "../services/feed.service";
import {AppState} from "../../AppState";
import {Store} from "@ngrx/store";

@Injectable()
export class FeedEffects {
  constructor(private store: Store<AppState>, private actions$: Actions, private feedService: FeedService) {
  }

  feed$ = createEffect(() => this.actions$
    .pipe(
      ofType(feedActions.fetchMessage),
      mergeMap(() => this.feedService
        .getMessages()
        .pipe(
          map(messages => feedActions.fetchMessageSuccess({messages})),
          catchError(error => of(feedActions.fetchMessageFailure({error: error.message})))
        )
      )
    )
  );

  post$ = createEffect(() => this.actions$
    .pipe(
      ofType(feedActions.postMessage),
      mergeMap(({message}) => this.feedService
        .postMessage(message)
        .pipe(
          map(() => feedActions.postMessageSuccess()),
          tap(() => this.store.dispatch(feedActions.fetchMessage())),
          catchError(error => of(feedActions.postMessageFailure({error: error.message})))
        )
      )
    )
  );

}
