import type { Meta, StoryObj } from '@storybook/react';
import { CountriesSelect } from './CountriesSelect';

const meta: Meta<typeof CountriesSelect> = {
  title: 'entities/CountriesSelect',
  component: CountriesSelect,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CountriesSelect>;

export const Primary: Story = {
  args: {},
};
