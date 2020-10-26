import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, {FC} from 'react';
import { ProductModel } from '../../../api-interfaces';
import Rating from '@material-ui/lab/Rating';
import { FilledButton, FilledButtonProps } from '../../utillities/FilledButton';
import { commonStyles } from 'app/styles/utilities';
import { productStyles } from './productStyles';
import { isMobile } from 'react-device-detect';

export const Product :FC<ProductModel> = ({id, name, description, rating, image, promo, active}) => {
    const commonClasses = commonStyles();
    const productClasses = productStyles();
    const handleOnClick = () => {
        console.log('smgsd')
    }
    const button :FilledButtonProps = {
        text: active ? "Show details" : "Unavailable",
        handleClick: handleOnClick,
        disabled: !active
    }
    const mediaStyles = active ? productClasses.image : `${productClasses.greyBackground} ${productClasses.image}`;
    const buttonStyles = button.disabled ? `${productClasses.filledButtonAbsolute} ${commonClasses.mb3} ${commonClasses.disabledButton}` : `${productClasses.filledButtonAbsolute} ${commonClasses.mb3}`;

    return(
        <Card elevation={0} className={!isMobile ? productClasses.cardSizes : ''}>
            <CardActionArea>
                {promo && 
                    <div className={productClasses.promoBox}>
                        <Typography className={productClasses.promoText}>Promo</Typography>    
                    </div>
                }
                <CardMedia
                image={image}
                className={mediaStyles}
                />
                <CardContent className={productClasses.cardContent}>
                    <Typography className={commonClasses.bold} gutterBottom variant="subtitle2" component="h2">
                    {name}
                    </Typography>
                    <Typography variant="body2" className={commonClasses.font14} color="textSecondary" component="p">
                    {description}
                    </Typography>
                   
                </CardContent> 
                <Rating className={`${commonClasses.mt3} ${commonClasses.mb2}`} size="small" name="product-rating" value={rating} readOnly />
            </CardActionArea>
            <Button className={buttonStyles} variant="contained" color="primary" disabled={button.disabled} fullWidth onClick={button.handleClick}>
                {button.text}
            </Button>
        </Card>
    )
}