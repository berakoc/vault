import {
  IconBell,
  IconFingerprint, IconLayoutDashboard, IconLock, IconSettings, TablerIconsProps,
} from '@tabler/icons-react';
import { TFunction } from 'i18next';
import {
  dashboardUrl, notificationsUrl, passwordsUrl, securityUrl, settingsUrl,
} from '../../common/routeUrls';

interface NavLinkItem {
  icon: (props: TablerIconsProps) => JSX.Element,
  label: string;
  description?: string;
  to: string;
}

export const getNavLinkItems = ({ t }: { t: TFunction }): NavLinkItem[] => [
  {
    icon: IconLayoutDashboard,
    label: t('navLink.dashboardLabel'),
    to: dashboardUrl,
  },
  {
    icon: IconLock,
    label: t('navLink.passwordsLabel'),
    to: passwordsUrl,
  },
  {
    icon: IconFingerprint,
    label: t('navLink.securityLabel'),
    to: securityUrl,
  },
  {
    icon: IconBell,
    label: t('navLink.notificationsLabel'),
    to: notificationsUrl,
  },
  {
    icon: IconSettings,
    label: t('navLink.settingsLabel'),
    to: settingsUrl,
  },
];

export const dull = null;
