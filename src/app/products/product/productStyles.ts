import { makeStyles } from "@material-ui/core";

export const productStyles = makeStyles(() => ({
    greyBackground:{
       filter: 'grayscale(1) !important',
    },
    promoBox:{
        width: "75px",
        height: "24px",
        backgroundColor: "#F9A52B",
        textAlign: 'center',
        position: "relative",
        zIndex: 100,
        transform: "translateY(40px)"       
    },
    promoText:{
        fontSize:"14px",
        color: "#ffffff",
        lineHeight: "16px",
        position: "absolute",
        left: "21.33%", 
        right: "22.67%",
        top: "calc(50% - 16px/2)",
    },
    image:{
        height: "190px",
    },
    cardSizes:{
        width: '288px',
        height: '400px',
        position: 'relative',
    },
    cardContent:{
        padding:0,
        marginTop:'.5rem',
        height:'64px',
    },
    filledButtonAbsolute: {
        padding:".75rem",
        backgroundColor:"#4460F7",
        "&:hover":{
            backgroundColor:"#2140E8"
        },
        textTransform:"none",
        position: 'absolute',
        bottom: 0,
    },
  }));