import React, {useState} from "react";
import paginatorCSS from './Paginator.module.css';
// import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={paginatorCSS.pages_buttons}>
        {portionNumber > 1
            ? <button className={paginatorCSS.buttonPrev} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>prev</button>
            : <button className={paginatorCSS.buttonPrevDisabled} disabled='disabled'>prev</button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <div key={page}
                            className={currentPage === page ? paginatorCSS.activeLink : undefined}
                    //className={ cn ({
                    // [paginatorCSS.activeLink]:currentPage === page
                    // }, paginatorCSS.????) }
                            onClick={() => {
                                onPageChanged(page);
                            }}>
                    {page}
                </div>
            })}
        {portionCount > portionNumber
            ? <button className={paginatorCSS.buttonNext} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>next</button>
            : <button className={paginatorCSS.buttonNextDisabled} disabled='disabled'>next</button>}
    </div>
}

export default Paginator;
