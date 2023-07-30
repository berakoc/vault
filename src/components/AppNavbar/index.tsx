import { NavLink, Navbar } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getNavLinkItems } from './common';
import useStore from '../../store';
import { activeNavLinkIndexSelector, setActiveNavLinkIndexSelector } from '../../store/selectors/layout';

interface AppNavbarProps {
  opened: boolean;
}

function AppNavbar({ opened }: AppNavbarProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'layout',
  });
  const activeNavLinkIndex = useStore(activeNavLinkIndexSelector);
  const setActiveNavLinkIndex = useStore(setActiveNavLinkIndexSelector);

  const navLinkItems = getNavLinkItems({ t });

  const getNavLinkItemClickHandler = (itemIndex: number) => () => {
    setActiveNavLinkIndex(itemIndex);
  };

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      {navLinkItems.map(({
        label, description, icon: Icon, to,
      }, index) => (
        <Link style={{ textDecoration: 'none' }} key={label} to={to}>
          <NavLink label={label} description={description} icon={<Icon size="1rem" stroke={1.5} />} onClick={getNavLinkItemClickHandler(index)} active={index === activeNavLinkIndex} color="indigo" />
        </Link>
      ))}
    </Navbar>
  );
}

export default AppNavbar;
