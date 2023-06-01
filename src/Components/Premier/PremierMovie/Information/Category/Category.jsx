import React from "react";
import style from "./Category.module.css"


let Category = (props) => {

    return <div className={style.movie_category}>{props.genres.map(g=> g===props.genres[props.genres.length-1]? `${g.genre}`:`${g.genre},`)}</div>
}
export default Category