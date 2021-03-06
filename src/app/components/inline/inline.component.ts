import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss']
})
export class InlineComponent implements OnInit, OnChanges {
  @Input() message;

  inlineMessage: string;
  isEditable: boolean;
  imagesClicked: boolean;

  constructor( private mailService: MailService) {
    this.isEditable = false;
    this.imagesClicked = false;
  }

  ngOnInit() {
    this.inlineMessage =  this.message.body === undefined ?
      this.message : this.message.body;
  }

  isImageClicked() {
    return this.imagesClicked;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inlineMessage  = changes.message.currentValue;
  }

  toggleEdit () {
    this.isEditable = !this.isEditable;
  }

  toggleImagesClicked () {
    this.imagesClicked = !this.imagesClicked;
  }

  updateMessage(value) {
    this.mailService.updateMessage(this.message.id, value);
    this.toggleEdit();
  }

  deleteMessage () {
    this.mailService.deleteMessage(this.message.id);
  }
}
