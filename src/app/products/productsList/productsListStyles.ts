import { makeStyles } from "@material-ui/core";

export const productsListStyles = makeStyles(() => ({
   spinner:{
       height: "56px !important",
       width: "56px !important",
       marginTop: "3rem",
   },
   center:{
       textAlign:"center",
   },
   cardSizes:{
    width: '288px',
    height: '400px',
    position: 'relative',
    },
    cardsGrid:{
        alignItems:"baseline",
    },
  }));