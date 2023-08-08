import React, { FC, useState, useMemo } from 'react';

import { WayType } from '../../types';

import { useWay } from "../../hooks/way";

import { Ticket } from '../Ticket';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    ticketsBlock: {
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '10px 10px',
    },
    tickets: {
        borderRight: '1px solid grey',
    },
};

export const TicketsBlock: FC = () => {
    const { ways } = useWay();

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
        <Box component='div' sx={styles.ticketsBlock}>
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
            <Box sx={styles.tickets}>
                {data && [...data].sort((a, b) => {
                    if (a.isFavorite && !b.isFavorite) {
                        return -1;
                    } else if (!a.isFavorite && b.isFavorite) {
                        return 1;
                    } else {
                        return 0;
                    }
                }).map((way: WayType) => {
                    return (
                        <Ticket
                            key={way.id}
                            id={way.id}
                            title={way.title}
                            description={way.description}
                            distance={way.distance}
                            position={way.position}
                            isFavorite={way.isFavorite}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}