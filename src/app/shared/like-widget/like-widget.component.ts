import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { UniqueIdService } from './../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.css']
})
export class LikeWidgetComponent implements OnInit {

  @Input() likes = 0;
  @Input() id!: string;

  @Output() liked = new EventEmitter<void>();

  fonts = {
    faThumbsUp,
  }

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if(!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  like() {
    this.liked.emit();
  }

}
