import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '123', displayName: 'value 1' },
      { value: '1233', displayName: 'value 2' },
    ],
  },
};
