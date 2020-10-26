import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, {FC, useState} from 'react';
import { ProductModel } from '../../../api-interfaces';
import Rating from '@material-ui/lab/Rating';
import { FilledButton, FilledButtonProps } from '../../utillities/FilledButton';
import { commonStyles } from 'app/styles/utilities';
import { productStyles } from './productStyles';
import { isMobile } from 'react-device-detect';
import { DetailsDialog, DetailsDialogProps } from '../detailsDialog/DetailsDialog';

export const Product :FC<ProductModel> = ({name, description, rating, image, promo, active}) => {
    const commonClasses = commonStyles();
    const productClasses = productStyles();
    const button :FilledButtonProps = {
        text: active ? "Show details" : "Unavailable",
        handleClick: ()=>setOpen(true),
        disabled: !active
    }
    const mediaStyles = active ? productClasses.image : `${productClasses.greyBackground} ${productClasses.image}`;
    const [open, setOpen] = useState(false);
    const detailsData : DetailsDialogProps = {
        name,
        description,
        image,
        open,
        onClose: ()=>setOpen(false)
    }
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
                
            </CardActionArea>
            <Rating className={commonClasses.mt3} size="small" name="product-rating" value={rating} readOnly />
            <FilledButton {...button} />
            <DetailsDialog {...detailsData} />
        </Card>
    )
}