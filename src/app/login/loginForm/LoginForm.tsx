import { Button, TextField } from '@material-ui/core';
import  React, {FC} from 'react';
import {commonStyles} from '../../styles/utilities';

export const LoginForm : FC = ( ) =>{
    const classes = commonStyles();
    return(
        <form>
            <div className={classes.mb3}>
                <label>
                    <div className={classes.mb2}>
                    Username 
                    </div>
                    <TextField id="outlined-username" label="Enter username" variant="outlined" fullWidth/>
                </label>
            </div>
            <div className="mb-5">
                <label>
                    <div className={classes.mb2}>
                        Password
                    </div>
                    <TextField id="outlined-password" label="Enter password" variant="outlined" fullWidth />
                </label>
            </div>
            <Button className={`${classes.filledButton} ${classes.mb3}`} variant="contained" color="primary" fullWidth>
                Log in
            </Button>
            <a className={`${classes.font14} ${classes.grey}`} href="/">Forgot password?</a>      
        </form>
    )
}