import * as React from 'react';
import Description from './';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Description',
  component: Description,
  decorators: [withKnobs],
};

const descriptionText: string =
  'Sheoak Hill, 60km west of Melbourne, has the potential to revolutionise how our natural areas are funded to be restored and maintained in perpetuity. The concept is underpinned by the power of values-aligned landholders working collaboratively to purchase and lovingly maintain manageable areas (40ha) of covented bushland and work toward a common goal.';

export const description = (): JSX.Element => (
  <Description>{text('description', descriptionText)}</Description>
);
