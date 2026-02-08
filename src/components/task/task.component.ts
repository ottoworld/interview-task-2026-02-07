import {Component, contentChild, input} from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: '[task]',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  head = input<string>();
  callToAction = input<string>();
  media = contentChild('media');
}
