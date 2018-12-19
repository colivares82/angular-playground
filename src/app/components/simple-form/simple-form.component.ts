import { Component, Inject, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  constructor(
    private mailService: MailService,
    @Inject('api') private api) { }

  ngOnInit() {
  }

  onMouseOver (event, value) {
    console.log(`the event is ${event}`);
    console.log(`the value is ${value}`);
  }
  onClick (value) {
    this.mailService.addMessage(value);
    console.log(`the value is ${value}`);
  }
}
