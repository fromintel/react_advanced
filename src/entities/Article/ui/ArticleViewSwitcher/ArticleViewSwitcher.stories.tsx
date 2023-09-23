import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

const meta: Meta<typeof ArticleViewSwitcher> = {
  title: 'entities/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
