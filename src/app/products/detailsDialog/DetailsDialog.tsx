import { Dialog, IconButton, Typography } from '@material-ui/core';
import { commonStyles } from 'app/styles/utilities';
import React, { FC } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { detailsStyles } from './detailsStyles';

export type DetailsDialogProps = {
    open: boolean;
    name: string;
    description: string;
    image: string;
    onClose: () => void;
}
  
export const DetailsDialog: FC<DetailsDialogProps> = ({ open, name, description, image, onClose }) => {
    const classes = commonStyles();
    const detailsClasses = detailsStyles();
    return (
        <Dialog onClose={onClose} aria-labelledby="details-dialog" open={open} >
           
            <IconButton
            aria-label="close dialog button"
            onClick={onClose}
            className={detailsClasses.closeIcon}
            edge="end"
            >
                <CloseIcon/>
            </IconButton>
            
            <img alt={name} src={image} className={detailsClasses.image} />
            <div className={classes.p2}>  
                <Typography className={`${classes.bold} ${classes.mt2}`} gutterBottom variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" className={`${classes.mb5} ${classes.mt3}`} color="textSecondary" component="p">
                    {description}
                </Typography>
            </div>       
        </Dialog>
    )
}