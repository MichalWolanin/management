import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';

const meta: Meta<BreadcrumbComponent> = {
  component: BreadcrumbComponent,
  title: 'BreadcrumbComponent',
};
export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Primary: Story = {
  args: {},
};
