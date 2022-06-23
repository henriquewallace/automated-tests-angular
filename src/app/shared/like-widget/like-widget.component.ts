import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.css']
})
export class LikeWidgetComponent implements OnInit {
  @Output() liked = new EventEmitter();
  @Input() likes = 0;
  @Input() id = null;

  constructor() { }

  ngOnInit(): void {
  }

}
