import React from "react";
import style from "./Countries.module.css"


let Countries = (props) => {

    return <div className={style.movie_country}>{props.countries.map(c=> c===props.countries[props.countries.length-1]? `${c.country}`:`${c.country},`)}</div>
}
export default Countries