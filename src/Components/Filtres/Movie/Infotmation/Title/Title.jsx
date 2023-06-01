import React from "react";
import style from "./Title.module.css"


let Title = (props) => {
    return <div className={style.movie_title}>{props.nameRu}</div>
}

export default Title