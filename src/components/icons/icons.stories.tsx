import * as React from 'react';
import ArrowDownIcon from './ArrowDownIcon';
import AvailableCreditsIcon from './AvailableCreditsIcon';
import CloseIcon from './CloseIcon';
import CreditsIcon from './CreditsIcon';
import CurrentCreditsIcon from './CurrentCreditsIcon';
import OrganizationIcon from './OrganizationIcon';
import PinIcon from './PinIcon';
import PointerIcon from './PointerIcon';
import RegenIcon from './RegenIcon';
import RegenLogoIcon from './RegenLogoIcon';
import TotalCreditsIcon from './TotalCreditsIcon';
import VerifiedIcon from './VerifiedIcon';
import PlayIcon from './PlayIcon';
import DocumentIcon from './DocumentIcon';
import EyeIcon from './EyeIcon';
import EmailIcon from './EmailIcon';
import PhoneIcon from './PhoneIcon';
import DropdownIcon from './DropdownIcon';
import CheckedIcon from './CheckedIcon';
import BreadcrumbIcon from './BreadcrumbIcon';
import FacebookIcon from './social/FacebookIcon';
import InstagramIcon from './social/InstagramIcon';
import TelegramIcon from './social/TelegramIcon';
import TwitterIcon from './social/TwitterIcon';
import LinkedInIcon from './social/LinkedInIcon';
import MediumIcon from './social/MediumIcon';
import YoutubeIcon from './social/YoutubeIcon';
import GithubIcon from './social/GithubIcon';
import WhitepaperIcon from './WhitepaperIcon';
import BlockIcon from './BlockIcon';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Icons',
  component: ArrowDownIcon,
  decorators: [withKnobs],
};

export const arrowIcon = (): JSX.Element => (
  <ArrowDownIcon color={text('color', '#000')} direction={text('direction', 'down')} />
);

export const availableCreditsIcon = (): JSX.Element => <AvailableCreditsIcon />;

export const breadcrumbIcon = (): JSX.Element => <BreadcrumbIcon direction={text('direction', 'down')} />;

export const closeIcon = (): JSX.Element => <CloseIcon />;

export const playIcon = (): JSX.Element => <PlayIcon />;

export const eyeIcon = (): JSX.Element => <EyeIcon />;

export const documentIcon = (): JSX.Element => <DocumentIcon />;

export const creditsIcon = (): JSX.Element => <CreditsIcon color={text('color', '#000')} />;

export const currentCreditsIcon = (): JSX.Element => <CurrentCreditsIcon color={text('color', '#4FB573')} />;

export const organizationIcon = (): JSX.Element => <OrganizationIcon />;

export const pinIcon = (): JSX.Element => <PinIcon fontSize={text('fontSize', 'small')} />;

export const pointerIcon = (): JSX.Element => <PointerIcon />;

export const regenIcon = (): JSX.Element => <RegenIcon />;

export const emailIcon = (): JSX.Element => <EmailIcon />;

export const phoneIcon = (): JSX.Element => <PhoneIcon />;

export const regenLogoIcon = (): JSX.Element => <RegenLogoIcon />;

export const totalCreditsIcon = (): JSX.Element => <TotalCreditsIcon />;

export const verifiedIcon = (): JSX.Element => <VerifiedIcon color={text('color', '#000')} />;

export const dropdownIcon = (): JSX.Element => <DropdownIcon />;

export const checkedIcon = (): JSX.Element => <CheckedIcon />;

export const facebookIcon = (): JSX.Element => <FacebookIcon />;

export const instagramIcon = (): JSX.Element => <InstagramIcon />;

export const linkedInIcon = (): JSX.Element => <LinkedInIcon />;

export const mediumIcon = (): JSX.Element => <MediumIcon />;

export const telegramIcon = (): JSX.Element => <TelegramIcon />;

export const twitterIcon = (): JSX.Element => <TwitterIcon />;

export const youtubeIcon = (): JSX.Element => <YoutubeIcon />;

export const githubIcon = (): JSX.Element => <GithubIcon />;

export const whitepaperIcon = (): JSX.Element => <WhitepaperIcon />;

export const blockIcon = (): JSX.Element => <BlockIcon />;
