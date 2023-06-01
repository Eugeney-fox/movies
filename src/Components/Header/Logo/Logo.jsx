import React from "react";
import style from "./Logo.module.css"
import {NavLink} from "react-router-dom";

let Logo = (props)=>{
    return(
        <div>
            <NavLink to="/await" className={style.header_logo}>Movie</NavLink>
        </div>

    )
}

export default Logo