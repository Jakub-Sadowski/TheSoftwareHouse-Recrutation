import { Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { commonStyles } from 'app/styles/utilities';
import  React, {FC} from 'react';

export type CustomPaginationProps = {
    pagesCount: number;
    currentPage: number;
    changePage: Function;
}
export const CustomPagination : FC<CustomPaginationProps> = ({pagesCount, currentPage, changePage}) => {
    const classes = commonStyles();

    return(
        <div className={classes.flex}>
          <Button size="small" className={classes.textToNormal} disabled={currentPage===1} onClick={()=>changePage(1)}>First</Button>
          <Pagination count={pagesCount} page={currentPage} onChange={(e,v)=>changePage(v)} siblingCount={0} hidePrevButton hideNextButton />
          <Button size="small" className={classes.textToNormal} disabled={currentPage===pagesCount} onClick={()=>changePage(pagesCount)}>Last</Button>
      </div>
    )
}