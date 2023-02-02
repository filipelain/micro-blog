import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() {
  }

  private dataBase: Array<Message> = [{
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mattis dolor, ' +
      'nec elementum odio. Nam at libero iaculis, luctus massa sed, maximus lectus. Suspendisse sodales ' +
      'dolor non quam hendrerit gravida. In bibendum pharetra scelerisque. Proin sed laoreet nulla. Phasellus ' +
      'ullamcorper euismod nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ' +
      'inceptos himenaeos.',
    likes: 0,
    author: 'John Doe'
  }, {
    id: '2',
    text: 'Fusce et nisl massa. Integer nibh lacus, semper eu venenatis eget, gravida vel tortor. Etiam non nibh elementum, ' +
      'blandit purus vitae, consequat tellus. Duis eget ex in arcu faucibus maximus. Curabitur iaculis interdum dapibus. ' +
      'Sed placerat velit nec nulla fermentum tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 3,
    author: 'Jany Doe'
  }];

  getMessages(): Observable<Array<Message>> {
    const messages: Array<Message> = this.dataBase;
    return of(messages).pipe(delay(500));

  }

  postMessage(message: Message): Observable<null> {
    const id = this.dataBase.length + 1;
    this.dataBase = [{
      ...message,
      id: String(id)
    },
      ...this.dataBase
    ]
    return of(null).pipe(delay(500));
  }
}
