import React from "react";
import style from "./List.module.css"
import {NavLink} from "react-router-dom";


let List = (props)=>{

    return <li className={props.currentUrl===props.textList? `${style.fetch_true}`:`${style.fetch}`}><NavLink to={props.linkList} className={props.currentUrl===props.textList? `${style.nav_li_white}`:`${style.nav_li}`}>{props.textList}</NavLink></li>
}

export default List