import React from "react";
import style from "./Search.module.css"
import axios from "axios";
import {setCurrentPage} from "../../../Redux/moviesReducer";

let Search = (props)=>{


    let onSearchChange = (evt)=>{
        let text = evt.target.value
        props.updateNewSearchText(text)
        props.store.dispatch(setCurrentPage(1))
        const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}`;
        axios.get(apiUrl,{
            params: {
                'page': `${props.currentPage}`
            },
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '48309e10-cd16-475a-9d99-595a75f24327'
            }}).then((resp) => {
                const movies = resp.data.films;
                props.setMoviesState(movies)
                const pagesCount = resp.data.pagesCount;
                props.setPagesCount(pagesCount)

            }
        )
    }



    return(
        <div>
                <input type="text" className={style.header_search} placeholder={props.searchPlaceholder}
                       value={props.newSearchText} onChange={onSearchChange} />
        </div>

    )
}

export default Search