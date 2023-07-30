import { Outlet } from 'react-router-dom';
import AppLayout from '../AppLayout';

function OutletLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default OutletLayout;
