import React, { FC } from "react";

import { useModal } from "../../hooks/modal";

import { Box, Typography, Button } from '@mui/material';

const styles = {
    head: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
    },
};

export const Head: FC = () => {
    const { updateIsOpen } = useModal();

    return (
        <Box component='div' sx={styles.head}>
            <Typography variant='h3'>Saunter</Typography>
            <Button
                variant="contained"
                onClick={() => updateIsOpen(true)}
            >
                Add path
            </Button>
        </Box>
    )
}