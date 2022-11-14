import React, { FC, useCallback } from 'react';

import { DELETE_WAY, ADD_TO_FAVORITE } from '../../constants';
import { WayType } from '../../types';

import { Map } from '../Map';
import { Grid, Card, CardHeader, CardContent, Typography, CardActions, Button } from '@mui/material';

import { useDispatch } from 'react-redux';

interface DescriptionProps {
    isLoaded: boolean,
    description: WayType;
    setDescription: (value: null) => void;
}

export const Description: FC<DescriptionProps> = ({ description, isLoaded, setDescription }) => {
    const dispatch = useDispatch();

    const onRemoveWay = useCallback(() => {
        dispatch({ type: DELETE_WAY, payload: {id: description.id } });
        setDescription(null);
    }, [description]);

    const onAddToFavorite = useCallback(() => {
        dispatch({ type: ADD_TO_FAVORITE, payload: {id: description.id, item: { isFavorite: true } } });
    }, [description]);

    return (
        <Grid container justifyContent='center' wrap='wrap'>
            {description &&
            <Card>
                <CardHeader title={description.title} subheader={description.distance} />
                <CardContent>
                    <Typography>{description.description} </Typography>
                    <CardActions>
                        <Button 
                            variant='text'
                            onClick={() => onAddToFavorite()}
                        >
                            Add to favorites
                        </Button>
                        <Button
                            variant='text'
                            onClick={() => onRemoveWay()}
                            color='error'
                        >
                            Remove
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>}
            <Grid item>
                {isLoaded && <Map markers={description.position} />}
            </Grid>
        </Grid>
    )
}