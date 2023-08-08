import React, { FC } from 'react';

import { Map } from '../Map';
import { Grid, Card, CardHeader, CardContent, Typography, CardActions, Button } from '@mui/material';

import { useMap } from "../../hooks/map";
import { useWay } from "../../hooks/way";

interface DescriptionProps {
    isLoaded: boolean,
}

export const Description: FC<DescriptionProps> = ({ isLoaded }) => {
    const { description, addDescription } = useMap();
    const { deleteWAY, addToFavorite } = useWay();

    const onRemoveWay = () => {
        if (description?.id) {
            deleteWAY(description.id);
            addDescription(null);
        }

    };

    const onAddToFavorite = (): void => {
        if (description?.id) {
            addToFavorite(description?.id);
        }
    }

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
                {isLoaded && <Map />}
            </Grid>
        </Grid>
    )
}