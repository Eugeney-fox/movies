import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import MovieContainer from "./Movie/MovieContainer/MovieContainer";

let Movies = (props) => {


    useEffect(() => {
        if (props.newSearchText===""){
            const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${props.typeFilms}`;
            axios.get(apiUrl,{
                params: {
                    'type': `${props.typeTopFilms}`,
                    'page': `${props.currentPage}`
                },
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
                }}).then((resp) => {
                const movies = resp.data.films;
                const pagesCount = resp.data.pagesCount;
                props.setPagesCount(pagesCount)
                props.setMoviesState(movies)
            });
        }
    }, [props.setMoviesState,props.newSearchText]);




    let apiSearch = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${props.newSearchText}`
    let apiTop = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${props.typeTopFilms}`

    let onPageChanged = (pageNumber,Url)=>{
        props.setCurrentPage(pageNumber)
        const apiUrl = `${Url}`;
        axios.get(apiUrl,{
            params: {
                'page': `${pageNumber}`
            },
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
            }}).then((resp) => {
            const movies = resp.data.films;
            props.setMoviesState(movies)
            console.log(props.currentPage)
        }
        )


    }

    return (
        <MovieContainer onPageChanged={onPageChanged} pagesCount={props.pagesCount} movies={props.movies} newSearchText={props.newSearchText}
                        currentPage={props.currentPage} apiUrlSearch={apiSearch} apiUrl={apiTop}/>
    )
}

export default Movies