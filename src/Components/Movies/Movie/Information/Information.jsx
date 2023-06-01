import React from "react";
import style from "./Information.module.css"
import Title from "./Title/Title";
import Category from "./Category/Category";
import Rating from "./Rating/Rating";


let Information = (props) => {
    return (
            <div className={style.movie_text}>
                <Title nameRu={props.nameRu}/>
                <Category genres={props.genres}/>
                <Rating rating={props.rating}/>
            </div>
    )
}

export default Information
