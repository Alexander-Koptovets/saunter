import React, { FC } from 'react';

import { API_KEY } from './constants';

import { Head } from './components/Head';
import { TicketsBlock } from './components/TicketsBlock';
import { Description } from './components/Description';
import { Modal } from './components/Modal';
import { Grid, Divider, Box } from '@mui/material';

import { useJsApiLoader } from '@react-google-maps/api';
import { useMap } from "./hooks/map";

const styles = {
  app: {
    position: 'relative',
    margin: '10px',
  },
};

const App: FC = () => {
  const { description } = useMap();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY as string,
  });

  return (
    <Box component='div' sx={styles.app}>
      <Grid container>
        <Grid item md={12}>
          <Head />
        </Grid>
        <Grid item md={12}>
          <Divider variant='middle' />
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <TicketsBlock />
          </Grid>
          <Grid item md={5}>
            {description && <Description isLoaded={isLoaded} />}
          </Grid>
        </Grid>
      </Grid>
      <Modal />
    </Box>
  );
};

export default App;
