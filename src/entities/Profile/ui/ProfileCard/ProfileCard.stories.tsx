import type { Meta, StoryObj } from '@storybook/react';
import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import AvatarImg from '../../../../shared/assets/icons/avatar.png';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'Username',
      firstname: 'firstname',
      lastname: 'lastname',
      age: 98,
      city: 'Hanover',
      country: Countries.GERMANY,
      currency: Currency.EUR,
      avatar: AvatarImg,
    },
  },
};

export const ProfileCardInLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const ProfileCardInError: Story = {
  args: {
    error: 'error',
  },
};
