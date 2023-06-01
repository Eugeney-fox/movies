import React from "react";
import style from "./Rating.module.css"


let Rating = (props) => {
    let getRate = (rating)=>{
        if (rating >= 8){
            return style.movie_rating__green
        } else if (rating > 5) {
            return style.movie_rating__orange
        } else {
            return style.movie_rating__red
        }

    }
    return <div className={`${style.movie_rating} ${getRate(props.rating)}`}>{props.rating}</div>
}

export default Rating