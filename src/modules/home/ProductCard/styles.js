import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        // height: 250,
        height: 0,
        paddingTop: '100%',
        // display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // width: '50%',
        // "&img": {
        //     width: 60%;
        //     height: 500px;
        // }
        "&.MuiCardMedia-root": {
            backgroundPosition: "unset"
        }
    },
    cardContent: {
        "&.MuiCardContent-root": {
            paddingBottom: '0',
        }
    },
    productBrand: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "1",
        color: "#282c3f",
        marginTop: "0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    productName: {
        color: "#535766",
        fontSize: "14px",
        lineHeight: "1",
        marginBottom: "0",
        marginTop: "0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontWeight: "400",
        display: "block",
    },
    productPrice: {
        lineHeight: "15px",
        margin: "10px 0 6px",
        whiteSpace: "nowrap",
    },
    productStrike: {
        textDecoration: "line-through",
        color: "#7e818c",
        fontWeight: 400,
        marginLeft: "5px",
        fontSize: "12px"
    },
    productDiscountedPrice: {
        fontSize: "14px",
        color: "#282c3f",
        fontWeight: 500,
    },
    productDiscountPercentage: {
        color: "#ff905a",
        fontWeight: "400",
        fontSize: "12px",
        marginLeft: "5px",
    },
    actionButtons: {
        "&.MuiCardActions-root": {
            justifyContent: "space-around"
        }
    }
}));


export default useStyles;