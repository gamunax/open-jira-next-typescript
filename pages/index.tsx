import { Card, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';
import { EntryStatus } from '../interfaces';

const HomePage: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_CLIENT_KEY);
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />

            {/**Agregar una nueva tarea */}
            <NewEntry />
            <EntryList status={EntryStatus.PENDING} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntryList status={EntryStatus.IN_PROGRESS} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <EntryList status={EntryStatus.FINISHED} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
