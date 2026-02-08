import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {TaskComponent} from "./task.component";
import { NgOptimizedImage } from "@angular/common";

const meta: Meta<TaskComponent> = {
  title: 'Components/Task',
  component: TaskComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({
    imports: [NgOptimizedImage]
  })]
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button task head="Upload data" callToAction="Visit app">
          <img slot="media" ngSrc="/Upload Data.png" height="144" width="128" alt="upload data icon with pink background"/>
          Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.
      </button>`
  })
}
