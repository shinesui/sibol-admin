import Head from 'next/head';
import useSWR from 'swr'
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';
import fetcher from '../utils/fetcher';
import { useAuth } from '../lib/auth';
import Empty from '../components/Empty';
import SiteTableSkeleton from '../components/SiteTableSkeleton';
import DashboardShell from '../components/DashboardShell';
import SiteTable from '../components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher)

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
        </DashboardShell>
      );
    }

  return (
  <DashboardShell>
    {data.sites ? <SiteTable sites={data.sites} /> : <Empty />}
    </DashboardShell>
  );
};

export default Dashboard;