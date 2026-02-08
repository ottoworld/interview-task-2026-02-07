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
  /**
   * Text to be displayed in the head slot
   */
  head = input.required<string>();

  /**
   * Optional text to override the "Visit app" call to action
   */
  callToAction = input<string>("Visit app");

  /**
   * Media source e.g. `"/my-picture.png"`
   */
  media = input.required<string>();

  /**
   * Screen reader text for `media`
   */
  mediaAlt = input.required<string>();
}
