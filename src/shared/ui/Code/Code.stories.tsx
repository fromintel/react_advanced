import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  args: {
    text: `
      const meta: Meta<typeof Code> = {
        title: 'shared/Code',
        component: Code
      };
    `,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    text: `
      const meta: Meta<typeof Code> = {
        title: 'shared/Code',
        component: Code
      };
    `,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Blue: Story = {
  args: {
    text: `
      const meta: Meta<typeof Code> = {
        title: 'shared/Code',
        component: Code
      };
    `,
  },
  decorators: [ThemeDecorator(Theme.BLUE)],
};
