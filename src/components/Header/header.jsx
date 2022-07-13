import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';


const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
  
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Find the weather and actvities in different places!
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Find a place
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    );
}

export default Header;