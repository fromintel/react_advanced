import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title text',
    text: 'some text',
  },
};

export const TextLight: Story = {
  args: {
    title: 'Title text',
    text: 'some text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextDark: Story = {
  args: {
    title: 'Title text',
    text: 'some text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Title text',
    text: 'some text',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title text',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'some text',
  },
};
