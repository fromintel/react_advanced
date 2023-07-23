import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const NoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: {} })],
};
