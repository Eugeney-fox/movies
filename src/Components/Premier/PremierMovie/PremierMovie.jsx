import React from "react";
import style from "./PremierMovie.module.css"
import Poster from "./Poster/Poster";
import Information from "./Information/Information";


let PremierMovie = (props) => {
    return (
        <div className={style.movie}>
            <Poster posterUrlPreview={props.posterUrlPreview}/>
            <Information nameRu={props.nameRu} datePremier={props.datePremier} genres={props.genres}/>
        </div>
    )
}

export default PremierMovie