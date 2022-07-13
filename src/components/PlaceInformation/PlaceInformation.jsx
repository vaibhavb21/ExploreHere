import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconPhone from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({currPlace, currSelected, refProp}) => {
    return (
        <h1>{currPlace.name}</h1>
    );
}

export default PlaceDetails;
