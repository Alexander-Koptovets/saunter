import React, {FC, useCallback, useState} from 'react';

import { useMap } from "../../hooks/map";
import { useWay } from "../../hooks/way";
import { useModal } from "../../hooks/modal";

import { Box, TextField, TextareaAutosize, Typography, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const styles = {
    form: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: '10px',
    },
};

export const Form: FC = () => {
    const { addWay } = useWay();
    const {
        distance,
        markers,
        addMarkers,
        addDistance,
    } = useMap();
    const { updateIsOpen } = useModal();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const onAddWay = useCallback(() => {
        const data = {
            id: Date.now(),
            title: title,
            description: description,
            position: markers,
            distance: distance,
            isFavorite: false,
        };

        addWay(data);
        updateIsOpen(false);
        addMarkers([]);
        addDistance('');
    }, [markers, distance, description]);

    return (
        <Box component='div' sx={styles.form} >
            <TextField 
                label='Title' 
                placeholder='Title' 
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextareaAutosize 
                minRows={6}
                maxLength={160} 
                placeholder='Full description'
                style={{ width: '100%' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Typography variant='h5'>{distance}</Typography>
            <Button 
                variant="contained"
                startIcon={<CheckIcon />}
                onClick={onAddWay}
            >
                Add path
            </Button>
        </Box>
    )
}