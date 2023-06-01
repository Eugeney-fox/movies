import React from "react";
import style from "./Information.module.css"
import Title from "./Title/Title";
import Category from "./Category/Category";
import DataPremier from "./DatePremier/DataPremier";


let Information = (props) => {
    return (
            <div className={style.movie_text}>
                <Title nameRu={props.nameRu}/>
                <Category genres={props.genres}/>
                <DataPremier datePremier={props.datePremier}/>
            </div>
    )
}

export default Information
