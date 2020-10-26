
import theme from '../src/theme/muiTheme';
import { muiTheme } from 'storybook-addon-material-ui';
import '../src/theme/fonts.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
}

export const decorators = [
  muiTheme([theme]), 
];