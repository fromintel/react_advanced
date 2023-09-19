import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from 'entities/Comment';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  args: {
    comments: [
      {
        id: '1',
        text: 'text1',
        user: { id: '1', username: 'username1' },
      },
      {
        id: '2',
        text: 'text2',
        user: { id: '2', username: 'username2', avatar: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg' },
      },
    ],
  },
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
