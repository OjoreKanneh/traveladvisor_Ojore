import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {  AppBar, Toolbar, Typography, InputBase, Box, Grid} from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
  const classes= useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: '#ff8a80' }}>
    <Toolbar className={classes.Toolbar}>
      <Typography variant="h5" className={classes.title}>
        Travel Advisor
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Explore new Places
          </Typography>
        </Grid>
        <Grid right>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          {/* </Autocomplete> */}
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
}

export default Header