import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'modal test text',
  },
};
