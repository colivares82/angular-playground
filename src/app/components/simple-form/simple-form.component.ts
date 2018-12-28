import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  @Output() update = new EventEmitter();
  newMessage: string;
  messages: Array<any>;
  constructor(
    private mailService: MailService,
    @Inject('api') private api) {
    this.newMessage = '';
    this.messages = mailService.messages;
  }

  ngOnInit() {
  }

  onMouseOver (event, value) {
    console.log(`the event is ${event}`);
    console.log(`the value is ${value}`);
  }
  onClick (value) {
    this.mailService.addMessage(value);
    this.newMessage = '';
  }

  addValue (value) {
    console.log(`This is the Simple Form Component ${value}`);
    if (value.body.length > 0) {
      this.onClick (value);
    }
  }
}
