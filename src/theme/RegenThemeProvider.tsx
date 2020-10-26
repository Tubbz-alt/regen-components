import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import theme from './muiTheme';
import 'fonts.css';

interface Props {
  readonly injectStyles?: (props?: any) => void;
  readonly children: React.ReactNode;
}

const MedulasThemeProvider = ({ injectStyles, children }: Props): JSX.Element => {
  if (injectStyles) {
    injectStyles();
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MedulasThemeProvider;
