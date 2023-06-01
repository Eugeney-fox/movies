import React from "react";
import MoviesContainer from "../Movies/MoviesContainer";
import {setCurrentPage, setTypeTop} from "../../Redux/moviesReducer";
import {setCurrentUrl} from "../../Redux/headerReducer";



let Top250 = (props)=>{
    let a = 'TOP_250_BEST_FILMS'
    props.store.dispatch(setTypeTop(a))
    props.store.dispatch(setCurrentPage(1))
    props.store.dispatch(setCurrentUrl('Топ250'))

    return <MoviesContainer store={props.store}/>
}

export default Top250