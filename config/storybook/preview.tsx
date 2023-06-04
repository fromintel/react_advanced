import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { WithI18next } from '../../src/shared/config/storybook/i18nDecorator/i18nDecorator';

export const globalTypes = {
  locale: {
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ua', title: 'Ukrainian' },
      ],
    },
  },
};

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
        { name: 'light', class: 'app_light_theme', color: '#ffe8d6' },
        { name: 'dark', class: 'app_dark_theme', color: '#2f3e46' },
      ],
    },
  },
  // decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)], // Here we can use custom theme decorator instead of native approach
  decorators: [StyleDecorator, RouterDecorator, WithI18next],
};

export default preview;
