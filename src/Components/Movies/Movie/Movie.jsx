import React from "react";
import style from "./Movie.module.css"
import Poster from "./Poster/Poster";
import Information from "./Information/Information";

let Movie = (props) => {
    return (
        <div className={style.movie}>
            <Poster posterUrlPreview={props.posterUrlPreview}/>
            <Information nameRu={props.nameRu} rating={props.rating} genres={props.genres} />
        </div>
    )
}

export default Movie