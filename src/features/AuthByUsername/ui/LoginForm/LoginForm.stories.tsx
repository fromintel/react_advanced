import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { username: '123', password: '123' } })],
};

export const withLoading: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};
