import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'text',
  },
};

export const Clear: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const Background: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: 'text',
    isSquare: true,
  },
};

export const SquareM: Story = {
  args: {
    children: '<',
    isSquare: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: '<',
    isSquare: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: '<',
    isSquare: true,
    size: ButtonSize.XL,
  },
};
