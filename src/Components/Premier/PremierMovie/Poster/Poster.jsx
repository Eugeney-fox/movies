import React from "react";
import style from "./Poster.module.css"

let Poster = (props) => {
    return (
        <div className={style.movie_cover_inner}>
            <img className={style.movie_cover}
                 src={`${props.posterUrlPreview}`} alt=""/>
            <div className={style.movie_cover__darkened}></div>
        </div>
    )
}

export default Poster