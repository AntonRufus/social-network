import React from "react";
import paginatorCSS from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={paginatorCSS.pages_buttons}>
        {pages.map(page => {
            return <div key={page}
                        className={currentPage === page ? paginatorCSS.activeLink : undefined}
                        onClick={() => {
                            onPageChanged(page);
                        }}>
                {page}
            </div>
        })}
    </div>
}

export default Paginator;
