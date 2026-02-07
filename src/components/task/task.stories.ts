import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import {TaskComponent} from "./task.component";

const meta: Meta<TaskComponent> = {
  title: 'Components/Task',
  component: TaskComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
};
