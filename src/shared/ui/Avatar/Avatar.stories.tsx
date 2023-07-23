import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/icons/avatar.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    altImg: 'alt img',
    size: 100,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    altImg: 'alt img',
    size: 50,
    src: AvatarImg,
  },
};
