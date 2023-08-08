import React, { FC } from 'react';

import { useModal } from "../../hooks/modal";

import { Map } from '../Map';
import { Form } from '../Form';
import { Grid, Typography, Button, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const Modal: FC = () => {
    const { isOpen, updateIsOpen } = useModal();

    return (
        <Dialog onClose={() => updateIsOpen(false)} open={isOpen}>
            <Grid container wrap='wrap' justifyContent='center'>
                <Grid item xs={6} md={12}>
                    <Grid container justifyContent='space-between' padding='5px'>
                        <Typography variant='h6'>Add new path</Typography>
                        <Button onClick={() => updateIsOpen(false)}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={5} padding='5px'>
                        <Form />
                    </Grid>
                    <Grid item md={5} padding='5px'>
                        <Map />
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    );
};