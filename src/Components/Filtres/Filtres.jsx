import React, { useEffect} from "react";
import axios from "axios";
import style from "./Filtres.module.css";
import {setCurrentUrl} from "../../Redux/headerReducer";
import Movie from "./Movie/Movie";



let Filtres = (props) => {

    props.store.dispatch(setCurrentUrl('Фильтр'))

    useEffect(() => {

            const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`;
            axios.get(apiUrl,{
                params: {

                },
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
                }}).then((resp) => {
                const genres = resp.data.genres;
                const countries = resp.data.countries;
                props.setGenresCountry(genres,countries)
            });
    }, []);

    useEffect(() => {

            const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films?`;
            axios.get(apiUrl,{
                params: {
                    'countries': `${props.state.idCountries}`,
                    'genres': `${props.state.idGenres}`,
                    'order': `${props.state.order}`,
                    'type': `FILM`,
                    'ratingFrom': `${props.state.ratingFrom}`,
                    'ratingTo': `${props.state.ratingTo}`,
                    'yearFrom': `${props.state.yearFrom}`,
                    'yearTo': `${props.state.yearTo}`,
                    'page': `${props.state.currentPage}`,
                },
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
                }}).then((resp) => {
                const movies = resp.data.items;
                const pagesCount = resp.data.totalPages;
                props.setPagesFiltresCount(pagesCount)
                props.setMoviesFiltresState(movies)
            });
    }, [props.setMoviesFiltresState,props.state.idCountries,props.state.idGenres,props.state.order,
        props.state.ratingTo,props.state.ratingFrom,props.state.yearTo,props.state.yearFrom]);



    let onPageChanged = (pageNumber)=>{
        props.setCurrenFiltrestPage(pageNumber)
        const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films?`;
        axios.get(apiUrl,{
            params: {
                'countries': `${props.state.idCountries}`,
                'genres': `${props.state.idGenres}`,
                'order': `${props.state.order}`,
                'type': `FILM`,
                'ratingFrom': `${props.state.ratingFrom}`,
                'ratingTo': `${props.state.ratingTo}`,
                'yearFrom': `${props.state.yearFrom}`,
                'yearTo': `${props.state.yearTo}`,
                'page': `${pageNumber}`,
            },
            headers: {
                'accept': 'application/json',
                'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
            }}).then((resp) => {
            const movies = resp.data.items;
            props.setMoviesFiltresState(movies)
        });

    }



    let movie = props.state.filtresState.map((f,index)=> <Movie key={index} posterUrlPreview={f.posterUrlPreview} nameRu={f.nameRu}
                                                    rating={f.ratingKinopoisk} genres={f.genres} year={f.year} countries={f.countries}/>)

    let pages =[]
    for(let i=1;i<props.state.pagesCount+1;i++){
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



    let onFilterChange = (evt)=>{
        let ratingFrom, ratingTo,yearFrom,yearTo,genre,country,order
        evt.target.name === "ratingFrom"? ratingFrom=evt.target.value : ratingFrom=props.state.ratingFrom
        evt.target.name === "ratingTo"? ratingTo=evt.target.value : ratingTo=props.state.ratingTo;
        evt.target.name === "yearFrom"? yearFrom=evt.target.value : yearFrom=props.state.yearFrom;
        evt.target.name === "yearTo"? yearTo=evt.target.value : yearTo=props.state.yearTo;
        evt.target.name === "genre"? genre=evt.target.value : genre=props.state.idGenres;
        evt.target.name === "country"? country=evt.target.value : country=props.state.idCountries;
        evt.target.name === "order"? order=evt.target.value : order=props.state.order;

        props.setFiltres(country,genre,order,ratingFrom,ratingTo,yearFrom,yearTo)


    }

    return (
        <div>
            <div className={style.filter}>
                <div className={style.item_filter}>
                    <p className={style.txt}>Жанры:</p>
                    <select className={style.menu} name="genre" id="1" onChange={onFilterChange}>
                        {props.state.genres.map(g=>{while (g.genre!="") {return <option key={g.id} value={g.id}>{g.genre}</option>}})}
                    </select>
                </div>
                <div className={style.item_filter}>
                    <p className={style.txt}>Страны:</p>
                    <select className={style.menu} name="country" id="2" onChange={onFilterChange}>
                        {props.state.countries.map(c=>{return <option key={c.id} value={c.id}>{c.country}</option>})}
                    </select>
                </div>
                <div className={style.item_filter}>
                    <p className={style.txt}>Сортировка:</p>
                    <select className={style.menu} name="order" id="3" onChange={onFilterChange}>
                        <option value="RATING">По рейтингу</option>
                        <option value="NUM_VOTE">По количкству голосов</option>
                        <option value="YEAR">По году</option>
                    </select>
                </div>

                <div className={style.item_filter}>
                    <p className={style.txt}>Рейтинг от:</p>
                    <input className={style.menu} type="text" name="ratingFrom" value={props.state.ratingFrom} placeholder="0" onChange={onFilterChange}/>
                </div>
                <div className={style.item_filter}>
                    <p className={style.txt}>Рейтинг до:</p>
                    <input className={style.menu} type="text" name="ratingTo" value={props.state.ratingTo} placeholder="10" onChange={onFilterChange}/>
                </div>
                <div className={style.item_filter}>
                    <p className={style.txt}>Год от:</p>
                    <input className={style.menu} type="text" name="yearFrom" value={props.state.yearFrom} placeholder="2023" onChange={onFilterChange}/>
                </div>
                <div className={style.item_filter}>
                    <p className={style.txt}>Год до:</p>
                    <input className={style.menu} type="text" name="yearTo" value={props.state.yearTo} placeholder="2023" onChange={onFilterChange}/>
                </div>

            </div>
            <div className={style.movies}>
                {movie}
            </div>
            <div className={style.pag}>
                {pages.map(p=> {
                    return (<span className={props.state.currentPage === p ? `${style.pag_page_click}`:`${style.pag_page}`} onClick={(e)=>
                    {onPageChanged(p)}}>{p}</span>)
                })}
            </div>
        </div>
    )


}

export default Filtres