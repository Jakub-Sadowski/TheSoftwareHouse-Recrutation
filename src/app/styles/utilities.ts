import { makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";

export const commonStyles = makeStyles(() => ({
    filledButton: {
        padding:".75rem",
        backgroundColor:"#4460F7",
        "&:hover":{
            backgroundColor:"#2140E8"
        },
        textTransform:"none",
       
    },
    disabledButton:{
        color: "#ffffff !important",
        backgroundColor:"#9194A5 !important"
    },
    logo:{
        fontFamily:"Nunito",
        fontWeight:600,
        fontSize:"24px",
        color:"#1A1B1D",
        textDecoration: "none",
    },
    center:{
        margin:"0 auto"
    },
    centerVertically:{
        transform:`translateY(${isMobile?'20%':'60%'})`
    },
    mainContainer:{
        maxWidth:"1440px",
        margin:"0 auto",
    },
    toRight:{
        float:"right",
    },
    textToNormal:{
        textTransform:"none",
    },
    colorBlue:{
        color:"#4460F7",
        borderColor: "#4460F7",
    },
    mb2:{
        marginBottom: ".5rem",
    },
    mb3:{
        marginBottom: "1rem",
    },
    mb5:{
        marginBottom: "3rem",
    },
    mt2:{
        marginTop: ".5rem",
    },
    mt3:{
        marginTop: "1rem",
    },
    mt5:{
        marginTop: "3rem",
    },
    pb2:{
        paddingBottom: ".5rem",
    },
    pb3:{
        paddingBottom: "1rem",
    },
    pt2:{
        paddingTop: ".5rem",
    },
    pt3:{
        paddingTop: "1rem",
    },
    grey:{
        color:"#9194A5" ,
    },
    font14:{
        fontsize: "14px",
    },
    flex:{
        display:"flex",
    },
    search:{
        width: '392px',
        marginRight:'1rem',
        height:"3rem",
    },
    browserNav:{
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"3rem",
        marginBottom:"5rem",
    },
    bold:{
        fontWeight: 600,
    },
  }));