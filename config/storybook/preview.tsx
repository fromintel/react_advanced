import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffe8d6' },
        { name: 'dark', class: 'dark', color: '#2f3e46' },
      ],
    },
  },
  // decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)], // Here we can use custom theme decorator instead of native approach
  decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
