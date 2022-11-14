import React, { FC, useState, useMemo } from 'react';

import { WayType } from '../../types';

import { Ticket } from '../Ticket';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useSelector } from 'react-redux';

import styles from './Style.module.css';

interface TicketsBlockProps {
    onDescription: (desc: WayType) => void;
}

export const TicketsBlock: FC<TicketsBlockProps> = ({ onDescription }) => {
    const ways = useSelector<WayType[]>(state => state);
    const [search, setSearch] = useState<string>('');
    const data = useMemo(() => {
        if (search && Array.isArray(ways)) {
            const value = search.toLowerCase();

            return ways.filter((way) => {
                return way.title.toLowerCase().includes(value) || 
                    way.description.toLowerCase().includes(value);
            });
        } else if (!search && Array.isArray(ways)) {
            return ways;
        }
    }, [search, ways]);

    return (
        <Box className={styles['tickets-block']}>
            <TextField 
                id="search" 
                label="Search" 
                variant="outlined" 
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
            <Box className={styles.tickets}>
                {data?.sort((a, b) => (b.isFavorite - a.isFavorite))
                .map((way: WayType) => {
                    return (
                        <Ticket
                            key={way.id}
                            id={way.id}
                            title={way.title}
                            description={way.description}
                            distance={way.distance}
                            position={way.position}
                            isFavorite={way.isFavorite}
                            onDescription={onDescription}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}