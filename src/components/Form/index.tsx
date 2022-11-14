import React, { FC, useState } from 'react';

import { Box, TextField, TextareaAutosize, Typography, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import styles from './Style.module.css';

interface FormProps {
    onAddWay: (title: string, description: string) => void,
    distance: string;
}

export const Form: FC<FormProps> = ({ onAddWay, distance }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    return (
        <Box className={styles.form} >
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
                onClick={() => onAddWay(title, description)}
            >
                Add path
            </Button>
        </Box>
    )
}