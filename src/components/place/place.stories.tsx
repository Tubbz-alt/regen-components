import * as React from 'react';
import PlaceInfo from './PlaceInfo';
import ProjectPlaceInfo, { Place } from './ProjectPlaceInfo';
import { withKnobs, text, number, object } from '@storybook/addon-knobs';

export default {
  title: 'Place',
  component: PlaceInfo,
  decorators: [withKnobs],
};

const place: Place = {
  city: 'Melbourne',
  state: 'Victoria',
  country: 'Australia',
};

export const projectPlaceInfo = (): JSX.Element => (
  <ProjectPlaceInfo
    place={object('place', place)}
    area={number('area', 440)}
    areaUnit={text('areaUnit', 'hectares')}
  />
);

// export const creditPlaceInfo = (): JSX.Element => (
//   <CreditPlaceInfo place={text('place', 'Brazil')} outcome={text('outcome', 'carbon')} />
// );
