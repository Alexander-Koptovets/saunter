import React, { FC } from "react";

import { MarkerType, WayType } from '../../types';

import { Box, Typography  } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';

import styles from './Style.module.css';

interface TicketProps {
    id: number,
    title: string,
    description: string,
    distance: string,
    position: MarkerType[],
    isFavorite: boolean,
    onDescription: (desc: WayType) => void,
}

export const Ticket: FC<TicketProps> = ({
    id,
    title,
    description,
    distance,
    position,
    isFavorite,
    onDescription 
}) => {
    return (
        <Box className={styles.ticket} onClick={() => onDescription({id, title, description, distance, position, isFavorite})}>
            <OpenWithIcon />
            {isFavorite && <StarIcon />}
            <Box>
                <Typography>{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
            <Typography>{distance}</Typography>
            <KeyboardArrowRightIcon />
        </Box>
    )
}