import * as React from 'react';
import OutlinedButton from './OutlinedButton';
import PrevNextButton from './PrevNextButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default {
  title: 'Buttons',
  component: OutlinedButton,
};

export const outlinedButton = (): JSX.Element => (
  <OutlinedButton startIcon={<ArrowDownwardIcon />}>read more</OutlinedButton>
);

export const nextButton = (): JSX.Element => <PrevNextButton direction="next" />;

export const prevButton = (): JSX.Element => <PrevNextButton direction="prev" />;
