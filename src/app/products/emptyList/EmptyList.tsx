import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { emptyListStyles } from './emptyListStyles';
import { commonStyles } from 'app/styles/utilities';

export const EmptyList = () => {
    const listClasses = emptyListStyles();
    const commonClasses = commonStyles();
    return (
        <Paper className={listClasses.container}>
            <LocalMallOutlinedIcon className={listClasses.icon} />
            <Typography className={commonClasses.bold} gutterBottom variant="subtitle2" component="h2">
                Ooops... It's empty here
            </Typography>
            <Typography variant="body2" className={commonClasses.font14} color="textSecondary" component="p">
                There are no products on the list
            </Typography>
        </Paper>
    )
}
