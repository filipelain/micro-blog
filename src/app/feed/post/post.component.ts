import {Component, ViewChild} from '@angular/core';
import {Message} from "../models/Message";
import {Store} from "@ngrx/store";
import {AppState} from "../../AppState";
import * as feedActions from "../store/feed.actions";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @ViewChild('messageForm',{static:false}) messageForm: NgForm | undefined;
  constructor(private readonly store: Store<AppState>) {}
  submitMessage(values: any): void {
    const {message} = values;
    const newMessage: Message = {
      author: "Jon Doe",
      id: '',
      text: message,
      likes: 0
    }
    this.store.dispatch(feedActions.postMessage({message: newMessage}));
    this.messageForm?.reset();
  };

}
