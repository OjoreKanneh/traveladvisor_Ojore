import React from 'react';
import { useState } from 'react';
import { CircularProgress,Grid,Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
  const [type, setType] = useState('restuarants');
  const [rating, setRating] = useState('restuarants');
  const classes=useStyles();

  const places=[
    {name:'place Name'},
    {name:'place Namee'},
    {name:'place Nameee '},

]; 


  return (
    <div className={classes.container}>
      <Typography variant="h4" >
      restaurants, hotels and attractions around you

      </Typography>
      <FormControl className={classes.formControl} >
        <InputLabel> Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value) }> 
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attraction">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} >
        <InputLabel> Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value) }> 
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>

        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>


      </Grid>
      

    </div>
  )
}

export default List