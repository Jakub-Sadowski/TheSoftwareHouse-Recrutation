import { Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import  React, { FC, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { commonStyles } from 'app/styles/utilities';
import { isMobile } from 'react-device-detect';

export type ProductsFormProps = {
    search: {
        value: string,
        handleOnChange: Function
    },
    active:{
        value: boolean | undefined,
        handleOnChange: Function
    },
    promo:{
        value: boolean | undefined,
        handleOnChange: Function
    }
}
export const ProductsForm :FC<ProductsFormProps> = ({search, active, promo}) =>{
    const classes = commonStyles();
    const [text, setText] = useState('');
    const handleOnSubmit = (e:React.MouseEvent | React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        search.handleOnChange(text)
    }
    return(
        <div className={!isMobile ? classes.flex : ''}>
            <form onSubmit={handleOnSubmit}> 
                <FormControl variant="outlined" fullWidth className={classes.mt3}>
                <InputLabel htmlFor="filled-adornment-search">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    value={text}
                    onChange={({target})=>setText(target.value)}
                    className={!isMobile ? classes.search : ''}
                    endAdornment={<InputAdornment position="end">
                        <IconButton
                            aria-label="search button"
                            type="submit"
                            onClick={handleOnSubmit}
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
            </form>
            <FormGroup row className={classes.mt3}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={active.value}
                        onChange={({target})=>active.handleOnChange(target.checked)}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Active" 
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={promo.value}
                        onChange={({target})=>promo.handleOnChange(target.checked)}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Promo"
                />
        </FormGroup>
      </div>
    );
}