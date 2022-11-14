import React, { FC } from 'react';

import { MarkerType } from '../../types';

import { Map } from '../Map';
import { Form } from '../Form';
import { Box, Grid, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Style.module.css';

interface ModalProps {
    onCloseModal: () => void;
    markers: MarkerType[];
    onAddMarker: (position: any) => void;
    onClearMarkers: () => void;
    onAddWay: (title: string, description: string) => void;
    onGetDistance: (distance: string) => void;
    distance: string;
}

export const Modal: FC<ModalProps> = ({ 
    onCloseModal,
    markers,
    onAddMarker,
    onClearMarkers,
    onAddWay,
    onGetDistance,
    distance
}) => {
    return (
        <Box className={styles.modal}>
            <Grid container wrap='wrap' justifyContent='center'>
                <Grid item xs={6} md={12}>
                    <Grid container justifyContent='space-between' padding='5px'>
                        <Typography variant='h6'>Add new path</Typography>
                        <Button onClick={() => onCloseModal()}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={5} padding='5px'>
                        <Form onAddWay={onAddWay} distance={distance} />
                    </Grid>
                    <Grid item md={5} padding='5px'>
                        <Map 
                            markers={markers} 
                            onAddMarker={onAddMarker} 
                            onClearMarkers={onClearMarkers}
                            onGetDistance={onGetDistance}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}