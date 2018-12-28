import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss']
})
export class InlineComponent implements OnInit, OnChanges {
  @Input() message;

  inlineMessage: string;
  isEditable: boolean;

  constructor() {
    this.isEditable = false;
  }

  ngOnInit() {
    this.inlineMessage =  this.message.body === undefined ?
      this.message : this.message.body;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inlineMessage  = changes.message.currentValue;
  }

  toggleEdit () {
    this.isEditable = !this.isEditable;
  }

}
