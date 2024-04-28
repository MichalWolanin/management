import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  component: NavbarComponent,
  title: 'NavbarComponent',
};
export default meta;
type Story = StoryObj<NavbarComponent>;

export const Primary: Story = {
  args: {},
};
