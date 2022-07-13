import React, { useState, useEffect, createRef } from "react";

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles.js';
import PlaceDetails from '../PlaceInformation/PlaceInformation';

const List = ({ listPlaces, type, setType, rating, setRating, childClicked, isLoading }) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();
  
    useEffect(() => {
      setElRefs((refs) => Array(listPlaces?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [listPlaces]);
  
    return (
      <div className={classes.container}>
        <Typography variant="h4">Find information about selected location:</Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
                <InputLabel id="type">Type</InputLabel>
                <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="rating">Rating</InputLabel>
              <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value="">No filter</MenuItem>
                <MenuItem value="3">3+ stars</MenuItem>
                <MenuItem value="4">4+ stars</MenuItem>
                <MenuItem value="4.5">4.5+ stars</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
            {listPlaces?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place}/>
              </Grid>
            ))}
          </Grid>
          </>
        )}
      </div>
    );
}
  

export default List;