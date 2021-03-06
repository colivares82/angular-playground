import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages: Array<Object>;
  constructor() {
    this.messages = [
      {id: 1, body: 'You have some email'},
      {id: 2, body: 'this is the second element'},
      {id: 3, body: 'Another one'},
      {id: 4, body: 'This is another'},
      {id: 5, body: 'Yes you got it'}
    ];
  }

  addMessage = (message) => {
    const lastMessage = this.messages[this.messages.length - 1];
    message.id = lastMessage['id'] + 1;
    this.messages.push(message);
  }

  updateMessage (id, newMessage) {
    this.messages = this.messages.map(message =>
      message['id'] === id ? {id, body: newMessage} : message
    );
  }

  deleteMessage (id) {
    console.log('delete ' + id);
    this.messages = this.messages.filter(message =>
      message['id'] !== id
    );
    console.log(this.messages);
  }
}
