import { Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import  React, { FC } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { commonStyles } from 'app/styles/utilities';

export const ProductsForm :FC = () =>{
    const classes = commonStyles();
    return(
        <>
            <FormControl variant="outlined" fullWidth className={classes.mt3}>
            <InputLabel htmlFor="filled-adornment-search">Search</InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                value={''}
                onChange={()=>console.log('asd')}
                endAdornment={<InputAdornment position="end">
                    <IconButton
                        aria-label="search button"
                        onClick={()=>console.log('search')}
                        edge="end"
                        >
                        <SearchIcon/>
                    </IconButton>
                </InputAdornment>}
                aria-describedby="search-input"
                inputProps={{
                    'aria-label': 'search',
                }}
                labelWidth={0}
            />
            </FormControl>
            <FormGroup row className={classes.mt3}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={true}
                        onChange={()=>console.log('smth')}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Active" 
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={false}
                        onChange={()=>console.log('smth')}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Promo"
                />
        </FormGroup>
      </>
    );
}