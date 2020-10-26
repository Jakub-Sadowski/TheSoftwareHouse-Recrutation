import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { StoreModel } from 'api-interfaces';
import { commonStyles } from 'app/styles/utilities';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { TRY_LOG_IN, TRY_LOG_OUT } from 'redux/login/types';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';

export const LoginStatus = () => {
    const classes = commonStyles();
    const dispatch = useDispatch();
    const logged = useSelector<StoreModel, boolean>((state) => state.logged);
    const logIn = () => {
        dispatch({ type: TRY_LOG_IN, payload:true });
    }
    const logOut = () => {
        dispatch({ type: TRY_LOG_OUT, payload: false });
        setAnchorEl(null);
    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    if (logged)
        return (
            <div className={classes.toRight}>
                <IconButton
                    aria-label="menu button"
                    onClick={handleClick}
                    edge="end"
                    >
                    <Avatar className={classes.avatar} alt="Random avatar" src={require('assets/Oval.png')} />
                </IconButton>
                <Menu
                id="logout-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem onClick={logOut}>Logout</MenuItem>
                    <MenuItem><Link className={classes.logo} to={AppRoute.home}>join.tsh.io</Link></MenuItem>
                </Menu>
          </div>)
    else
        return (
            <Button variant="outlined" onClick={logIn} name="login button"
                className={`${classes.toRight} ${classes.textToNormal} ${classes.colorBlue} ${isMobile ? '' :classes.mt3}`}
            > Log in </Button>
        )
}
