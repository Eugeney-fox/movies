import React from "react";
import style from "./Movie.module.css"
import Poster from "./Poster/Poster";
import Information from "./Infotmation/Information";


let Movie = (props) => {
    return (
        <div className={style.movie}>
            <Poster posterUrlPreview={props.posterUrlPreview}/>
            <Information nameRu={props.nameRu} rating={props.rating} genres={props.genres} year={props.year} countries={props.countries}/>
        </div>
    )
}

export default Movie