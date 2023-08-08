import React, { FC, useCallback, useRef, useState } from 'react';

import { MODES } from '../../constants';
import { TravelMode, MarkerType } from '../../types';

import { GoogleMap, Marker, DistanceMatrixService } from '@react-google-maps/api';
import { useMap } from "../../hooks/map";

import { Grid, Box, Button } from '@mui/material';

export const Map: FC = () => {
    const { markers, addMarkers, addDistance } = useMap();

    const [mode, setMode] = useState<number>(MODES.MOVE);
    const mapRef = useRef<any>(undefined);

    const onAddMarker = (position: MarkerType) => {
        if (markers.length === 2) {
            addMarkers([markers[1], position]);
        } else {
            addMarkers([...markers, position]);
        }
    };

    const onClick = useCallback((loc: any) => {
        if (mode === MODES.SET_MARKER) {
            const lat = loc.latLng.lat();
            const lng = loc.latLng.lng();
            onAddMarker({lat, lng});
        }
    }, [mode]);

    const onLoad = (map: any): void => {
        mapRef.current = map;
    };
    
      const onUnmount = (): void => {
        mapRef.current = undefined;
      };

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const onHandleMode = useCallback(() => {
        switch (mode) {
          case MODES.MOVE:
            setMode(MODES.SET_MARKER);
            break;
          case MODES.SET_MARKER:
            setMode(MODES.MOVE);
            break;
          default:
            setMode(MODES.MOVE);
        }
      }, [mode]);

      return (
        <Grid container direction='column' justifyItems='start' style={{ width: '100%', height: '100%' }}>
            <Box style={{ width: '100%', height: '100%' }}>
                <Grid container justifyItems='center'>
                    <Button onClick={() => onHandleMode()}>
                        {mode === MODES.MOVE ? 'Set markers' : 'Move'}
                    </Button>
                    <Button 
                        onClick={() => addMarkers([])}
                        disabled={!markers.length}
                    >
                        Clear markers
                    </Button>
                </Grid>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    onClick={onClick}
                >
                    <>
                        {markers.map((pos) => {
                            return <Marker key={pos.lat} position={pos} />
                        })}
                        {markers.length === 2 &&
                            <DistanceMatrixService
                                options={{
                                    destinations: [markers[1]],
                                    origins: [markers[0]],
                                    travelMode: TravelMode.WALKING,
                                }}
                                callback = {(response) => {
                                    addDistance(response?.rows[0].elements[0].distance.text as string)
                                }}
                            />}
                    </>
                </GoogleMap>
            </Box>
        </Grid>
        
    )
}