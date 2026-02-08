import { Component, signal } from '@angular/core';
import {TaskComponent} from "../components/task/task.component";

export type TaskData = {
  id: string;
  media: string;
  mediaAlt: string;
  head: string;
  body: string;
  callToAction: string;
  href?: string;
  onClick?: () => void;
}

@Component({
  selector: 'app-root',
  imports: [TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  onClick = () => { console.log('click'); };

  tasks: TaskData[] = [
    {
      id: "upload",
      body: "Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.",
      head: "Upload data",
      callToAction: "Visit app",
      media: "/Upload Data.png",
      mediaAlt: "Upload data icon with pink background",
      onClick: this.onClick
    }
  ]
  protected readonly title = signal('interview-task-2026-02-07');
}
