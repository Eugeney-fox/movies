import React from "react";
import style from "./List.module.css"
import {NavLink} from "react-router-dom";


let List = (props)=>{

    return <li><NavLink to={props.linkList} className={props.currentUrl===props.textList?
        `${style.header_nav_li__white}`:`${style.header_nav_li}`}>{props.textList}</NavLink></li>

}

export default List