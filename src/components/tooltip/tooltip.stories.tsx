import * as React from 'react';
import Tooltip from './';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs],
};

export const mainTitle = (): JSX.Element => (
  <Tooltip title={text('title', 'tooltip content')} arrow placement="bottom">
    <div style={{ position: 'absolute', top: '14rem' }}>hover or touch me</div>
  </Tooltip>
);
