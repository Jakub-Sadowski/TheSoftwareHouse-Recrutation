import { TextField } from '@material-ui/core';
import { FilledButton, FilledButtonProps } from 'app/utillities/FilledButton';
import  React, {FC} from 'react';
import {commonStyles} from '../../styles/utilities';

export const LoginForm : FC = ( ) =>{
    const classes = commonStyles();
    const handleOnClick = () => {
        console.log('fsdf')
    }
    const logInButton : FilledButtonProps = {
        text: "Log in",
        handleClick: handleOnClick,
        disabled: false
    }
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
           <FilledButton {...logInButton} />
            <a className={`${classes.font14} ${classes.grey}`} href="/">Forgot password?</a>      
        </form>
    )
}