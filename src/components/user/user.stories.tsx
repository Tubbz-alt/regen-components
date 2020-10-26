import * as React from 'react';
import UserAvatar from './UserAvatar';
import UserInfo, { User } from './UserInfo';
import UserInfoWithTitle from './UserInfoWithTitle';
import { withKnobs, text, object } from '@storybook/addon-knobs';

export default {
  title: 'User',
  component: UserInfo,
  decorators: [withKnobs],
};

const user: User = {
  name: 'Odonata',
  place: {
    city: 'South Melbourne',
    state: 'Victoria',
    country: 'Australia',
  },
  imgSrc: 'http://www.odonata.org.au/wp-content/uploads/2018/01/odinata-logo-only.png',
  description: 'Odonata is a not-for-profit entity supporting biodiversity impact solutions.',
};

const { name, imgSrc } = user;

export const mediumUserAvatar = (): JSX.Element => <UserAvatar alt={name} src={text('imgSrc', imgSrc)} />;

export const bigUserAvatar = (): JSX.Element => (
  <UserAvatar alt={name} src={text('imgSrc', imgSrc)} size="big" />
);

export const userAvatarWithLink = (): JSX.Element => (
  <UserAvatar
    alt={name}
    src={text('imgSrc', imgSrc)}
    size="big"
    href={text('href', 'http://www.odonata.org.au')}
  />
);

export const fallbackUserAvatar = (): JSX.Element => <UserAvatar />;

export const mediumUserInfo = (): JSX.Element => <UserInfo user={object('User', user)} />;

export const bigUserInfo = (): JSX.Element => <UserInfo user={object('User', user)} size="big" />;

export const columnUserInfo = (): JSX.Element => <UserInfo user={object('User', user)} direction="column" />;

export const withTitle = (): JSX.Element => (
  <UserInfoWithTitle user={object('User', user)} title={text('Title', 'project developer')} />
);
