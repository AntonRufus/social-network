import React from "react";
import preloader from "../../../assets/images/loading_gold_svg.svg";
import preloaderCSS from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={preloaderCSS.preloader}>
        <img src={preloader} alt=""/>
    </div>
}

export default Preloader;
