import React from "react";
import style from "../../Movies.module.css"
import Movie from "../Movie";


let MovieContainer = (props)=>{

    let movie = props.movies.map((f,index)=> <Movie key={index} posterUrlPreview={f.posterUrlPreview} nameRu={f.nameRu}
                                            rating={f.rating} genres={f.genres} />)
    let pages =[]
    for(let i=1;i<props.pagesCount+1;i++){
        if(i>20){
            break
        }else{
            pages.push(i)
        }
    }


    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
    return (
        <div>
            <div className={style.movies}>
                {movie}
            </div>
            <div className={style.pag}>
                {pages.map(p=> {
                    return (<span className={props.currentPage === p ? `${style.pag_page_click}`:`${style.pag_page}`} onClick={(e)=>
                    {props.newSearchText===""?props.onPageChanged(p,props.apiUrl):props.onPageChanged(p,props.apiUrlSearch)}}>{p}</span>)
                })}
            </div>
        </div>
    )
}


export default MovieContainer