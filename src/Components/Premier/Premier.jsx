import React, {useCallback, useEffect} from "react";

import axios from "axios";

import style from "./Premier.module.css"
import PremierMovie from "./PremierMovie/PremierMovie";

import {setCurrentUrl} from "../../Redux/headerReducer";



let Premier = (props) => {

    props.store.dispatch(setCurrentUrl('Кинопремьеры'))


    let api = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres`
    const fetchData = useCallback(()=>{
        if (props.newSearchText === "") {
            const apiUrl = api;
            axios.get(apiUrl, {
                params: {
                    'year': `${props.year}`,
                    'month': `${props.month}`
                },
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '6523cd55-bbd8-45eb-9b43-0d69ef347bd1'
                }
            }).then((resp) => {
                const movies = resp.data.items;
                props.setMoviesPremierState(movies)
            });
        }
    })

    useEffect(() => {
        fetchData()
    }, [props.newSearchText,props.year,props.month]);




    let movie = props.premierMovies.map((f,index) => <PremierMovie key={index} posterUrlPreview={f.posterUrlPreview} nameRu={f.nameRu}
                                                           datePremier={f.premiereRu} genres={f.genres}/>)
    let moths =['JANUARY','FEBRUARY','MARCH','APRIL','MAY',
        'JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']

    let years = ['2023','2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010'
        ,'2009','2008','2007','2006','2005','2004','2003','2002','2001','2000']


        return (
            <div className={style.wrapp}>
                <div className={style.selectWrapper}>
                    <select value={props.year} className={style.menu} name="year" id="1" onChange={e=>{props.setYearPremier(e.target.value)}}>
                        {years.map(c=>{return <option value={c}>{c}</option>})}
                    </select>
                    <select value={props.month} className={style.menu} name="month" id="2" onChange={e=>{props.setMonthPremier(e.target.value)}}>
                        {moths.map(c=>{return <option value={c}>{c}</option>})}
                    </select>
                </div>
                <div className={style.movies}>
                    {movie}
                </div>
            </div>

        )



}

export default Premier