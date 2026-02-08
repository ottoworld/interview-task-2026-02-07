import {Component, input} from '@angular/core';
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
  head = input.required<string>();
  callToAction = input<string>("Visit app");
  media = input.required<string>();
  mediaAlt = input.required<string>();
}
