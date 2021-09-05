import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import useStyles from "./styles";

export default function ProductCard({ product }) {
    const classes = useStyles();
    const { searchImage, productName, price, brand, mrp, discountDisplayLabel } = product;
    const productNameWithoutBrand = productName.replace(brand, '')
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={searchImage}
                />
                <CardContent className={classes.cardContent}>
                    <h3 className={classes.productBrand}>{brand}</h3>
                    <h4 className={classes.productName}>{productNameWithoutBrand}</h4>
                    <div className={classes.productPrice}>
                        <span>
                            <span className={classes.productDiscountedPrice}>Rs. {price}</span>
                            <span className={classes.productStrike}>Rs. {mrp}</span>
                        </span>
                        <span className={classes.productDiscountPercentage}>{discountDisplayLabel}</span>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actionButtons}>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
                <Button size="small" color="primary">
                    Wishlist
                </Button>
            </CardActions>
        </Card>
    );
}