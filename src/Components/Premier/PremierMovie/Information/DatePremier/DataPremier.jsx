import React from "react";
import style from "./DatePremier.module.css"


let Title = (props) => {
    return <div className={style.movie_title}>{props.datePremier}</div>
}

export default Title