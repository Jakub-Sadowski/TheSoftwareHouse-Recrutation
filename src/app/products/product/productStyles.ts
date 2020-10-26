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
        position: "absolute",
        zIndex: 100,
        transform: "translateY(20px)"       
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
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        position:'relative'
    },
    cardContent:{
        padding:'.5rem',
        marginTop:'.5rem',
        height:'64px',
    },
  }));