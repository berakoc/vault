import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      {t('layout')}
      <Outlet />
    </div>
  );
}

export default Layout;
