import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {TaskComponent} from "./task.component";
import { NgOptimizedImage } from "@angular/common";

/**
 * The Task is a component that is applied to an interactive parent e.g. `<button task` or `<a task`.
 * See the description of each control for further details.
 *
 * > Compatible with dark mode theme
 */
const meta: Meta<TaskComponent> = {
  title: 'Components/Task',
  component: TaskComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({
    imports: [NgOptimizedImage]
  })],
  args: {
    head: "Head text",
    media: "/Upload Data.png",
    mediaAlt: "upload data icon with pink background",
    callToAction: "Visit app",
  }
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button task [head]="head" [callToAction]="callToAction" [media]="media" [mediaAlt]="mediaAlt">
        Body text
      </button>`
  })
}

export const WithLargeBodyText: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button task [head]="head" [callToAction]="callToAction" [media]="media" [mediaAlt]="mediaAlt">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </button>`
  })
}

export const AsLink: Story = {
  render: (args) => ({
    props: args,
    template: `
      <a href="#" task [head]="head" [callToAction]="callToAction" [media]="media" [mediaAlt]="mediaAlt">
        This task is a link
      </a>`
  })
}
