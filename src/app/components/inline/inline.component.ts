import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss']
})
export class InlineComponent implements OnInit {
  @Input() message;
  constructor() { }

  ngOnInit() {
  }

}
