import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import theme from './muiTheme';

interface Props {
  readonly injectFonts?: boolean;
  readonly injectStyles?: (props?: any) => void;
  readonly children: React.ReactNode;
}

const MedulasThemeProvider = ({ injectFonts = true, injectStyles, children }: Props): JSX.Element => {
  if (injectStyles) {
    injectStyles();
  }

  if (injectFonts) {
    require('./fonts.css');
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MedulasThemeProvider;
