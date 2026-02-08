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
    },
    {
      id: "see",
      body: "Access all your advice and documents from Hymans Roberson via our secure online storage facility.",
      head: "See my documents",
      callToAction: "Visit app",
      media: "/See my documents.png",
      mediaAlt: "Documents icon with yellow background",
      onClick: this.onClick
    },
    {
      id: "whole",
      body: "Monitor and view latest whole fund funding position.",
      head: "Whole fund funding update",
      callToAction: "Visit app",
      media: "/Whole fund update.png",
      mediaAlt: "Graph icon with blue background",
      onClick: this.onClick
    },
    {
      id: "employer",
      body: "Calculate an updated funding level or indicative cessation valuation for any employer. View and download reports to share with your employers",
      head: "Employer funding update",
      callToAction: "Visit app",
      media: "/Employer funding update.png",
      mediaAlt: "Employer connections icon with green background",
      onClick: this.onClick
    },
  ]
  protected readonly title = signal('interview-task-2026-02-07');
}
