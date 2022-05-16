import { GlobalStyles } from '../src/app/styles/global-styles';
import { ResetStyles } from '../src/app/styles/reset-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <>
        <ResetStyles />
        <GlobalStyles />

        <Story />
      </>
    );
  },
];
