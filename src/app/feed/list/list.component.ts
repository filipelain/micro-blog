import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Message} from "../models/Message";
import * as feedActions from "../store/feed.actions";
import {errorSelector, isLoadingSelector, messagesSelector} from "../store/feed.selectors";
import {AppState} from "../../AppState";

@Component({
  selector: 'feed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  messages$: Observable<Array<Message>>;
  isLoading$: Observable<boolean>;

  error$: Observable<string|null>;
  constructor(private readonly store: Store<AppState>) {
    this.messages$ = this.store.pipe(select(messagesSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };



  private initializeFeed() {
    this.store.dispatch(feedActions.fetchMessage());
  }


  async ngOnInit() {
    this.initializeFeed();
  }

  likePost(id: string) {
    this.store.dispatch(feedActions.likePost({id}));
  }
}
