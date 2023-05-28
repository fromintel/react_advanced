import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { StoryFn } from '@storybook/react';

export const WithI18next = (Story: StoryFn) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<div>loading translations...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
