import React, { FC } from "react";

import { Box, Typography, Button } from '@mui/material';

import styles from './Style.module.css';

interface HeadProps {
    onAddPath: () => void;
}

export const Head: FC<HeadProps> = ({ onAddPath }) => {
    return (
        <Box className={styles.head}>
            <Typography variant='h3'>Saunter</Typography>
            <Button variant="contained" onClick={() => onAddPath()}>Add path</Button>
        </Box>
    )
}