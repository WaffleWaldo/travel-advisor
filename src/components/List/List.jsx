import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import { useStyles } from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('resturants')
    const [rating, setRating] = useState('')

    return (
        <div className={classes.containter}>
            <Typography variant='h4'>Resturants, Hotels & Attractions around you!</Typography>
            <FromControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={e => setType(e.target.value)}>
                    <MenuItem value='resturants'>Resturants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FromControl>
            <FromControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={e => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FromControl>
        </div>
    );
}

export default List;