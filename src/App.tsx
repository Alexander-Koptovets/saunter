import React, { FC, useCallback, useState } from 'react';

import { MarkerType, WayType } from './types';
import { ADD_WAY, API_KEY } from './constants';

import { Head } from '../src/components/Head';
import { TicketsBlock } from '../src/components/TicketsBlock';
import { Description } from '../src/components/Description';
import { Modal } from '../src/components/Modal';
import { Grid, Divider, Box, Button } from '@mui/material';

import { useJsApiLoader } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';

import styles from './Style.module.css';

const App: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [markers, setMarkers] = useState<MarkerType[] | []>([]);
  const [distance, setDistance] = useState<string>('');
  const [description, setDescription] = useState<WayType | null>(null);

  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDG7GFd-OzP0Q6InbIkmTLxVyxKHqcn57I', //API_KEY as string,
  });
  
  const onCloseModal = useCallback(() => setIsModal(false), [isModal]);

  const onAddPath = useCallback(() => setIsModal(true), [isModal]);

  const onAddMarker = useCallback((position: MarkerType) => {
    if (markers.length === 2) {
      setMarkers([markers[1], position]);
    } else {
      setMarkers([...markers, position]);
    }
  }, [markers]);

  const onClearMarkers = useCallback(() => {
    setMarkers([]);
  }, []);

  const onAddWay = useCallback((title: string, description: string) => {
    dispatch({ type: ADD_WAY, payload: {
      id: Date.now(),
      title: title,
      description: description,
      position: markers,
      distance: distance,
      isFavorite: false, 
    } });

    onCloseModal();
    setMarkers([]);
    setDistance('');
  }, [markers, distance])

  const onGetDistance = useCallback((distance: string) => {
    setDistance(distance);
  }, [markers])

  const onDescription = useCallback((description: WayType) => {
    setDescription({...description});   
  }, []);

  return (
    <Box className={styles.app}>
    <Grid container>
      <Grid item md={12}>
        <Head onAddPath={onAddPath} />
      </Grid>
      <Grid item md={12}>
        <Divider variant='middle' />
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={5}>
          <TicketsBlock onDescription={onDescription} />
        </Grid>
        <Grid item md={5}>
          {description && <Description description={description} isLoaded={isLoaded} setDescription={setDescription} />}
        </Grid>
      </Grid>
    </Grid>
    {isModal && 
      <Modal 
        onCloseModal={onCloseModal}
        markers={markers}
        onAddMarker={onAddMarker}
        onClearMarkers={onClearMarkers}
        onAddWay={onAddWay}
        onGetDistance={onGetDistance}
        distance={distance}
      />
    }
    </Box>
  );
}

export default App;
