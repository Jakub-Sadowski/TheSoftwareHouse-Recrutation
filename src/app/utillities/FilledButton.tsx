import { Button } from '@material-ui/core';
import { commonStyles } from 'app/styles/utilities';
import React, {FC} from 'react';

export type FilledButtonProps = {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}
export const FilledButton :FC<FilledButtonProps> = ({text, disabled, handleClick}) => {
    const classes = commonStyles();
    const buttonStyles = disabled ? `${classes.filledButton} ${classes.mb3} ${classes.disabledButton}` : `${classes.filledButton} ${classes.mb3}`;
    return(
        <Button className={buttonStyles} variant="contained" color="primary" disabled={disabled} fullWidth onClick={handleClick}>
            {text}
        </Button>
    )
}