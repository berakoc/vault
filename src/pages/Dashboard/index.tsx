import { usePageMeta } from './hooks/usePageMeta';

function Dashboard() {
  usePageMeta();

  return 'Dashboard';
}

export default Dashboard;
