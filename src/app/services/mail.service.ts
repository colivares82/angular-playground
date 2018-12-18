import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages: Array<Object>;
  constructor() {
    this.messages = [
      {body: 'You have some email'},
      {body: 'this is the second element'},
      {body: 'Another one'},
      {body: 'This is another'},
      {body: 'Yes you got it'}
    ];
  }

  addMessage = (body) => {
    this.messages.push({body});
  }
}
