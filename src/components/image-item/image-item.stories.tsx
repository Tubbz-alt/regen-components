import * as React from 'react';
import ImageItem from './';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Image Item',
  component: ImageItem,
  decorators: [withKnobs],
};
const titleText: string = 'Verified outcomes';
const descriptionText: string =
  'Software-based and remote-sensing monitoring keeps costs low and transparency high.';

export const imageItem = (): JSX.Element => (
  <ImageItem
    img={<img src="./verified.png" alt="verified" />}
    title={text('title', titleText)}
    description={text('description', descriptionText)}
  />
);
