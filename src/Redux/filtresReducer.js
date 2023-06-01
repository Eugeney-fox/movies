const SET_MOVIES_FILTRES = 'SET_MOVIES_FILTRES'
const SET_CURRENT_PAGE_FILTRES = 'SET_CURRENT_PAGE_FILTRES'
const SET_PAGES_COUNT_FILTRES = 'SET_PAGES_COUNT_FILTRES'
const SET_STATE_GENRES_COUNTRY = 'SET_STATE_GENRES_COUNTRY'
const SET_FILTRES = 'SET_FILTRES'


let initialState = {
    filtresState: [
        {
            nameRu: null,
            countries: [],
            genres: [],
            ratingKinopoisk: null,
            year: null,
            posterUrlPreview: null,
        },
    ],
    pagesCount:null,
    currentPage: 1,
    genres: [],
    countries:[],
    idCountries: 1,
    idGenres: 1,
    order: 'RATING',
    ratingFrom: '0',
    ratingTo: '10',
    yearFrom:'1923',
    yearTo: '2023',

}
const filtresReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_MOVIES_FILTRES:
            return {...state,filtresState: action.filtresState}
        case SET_PAGES_COUNT_FILTRES:
            return {...state,pagesCount: action.pagesCount}
        case SET_CURRENT_PAGE_FILTRES:
            return {...state,currentPage: action.currentPage}
        case SET_STATE_GENRES_COUNTRY:
            return {...state,genres: action.genres,countries: action.country}
        case SET_FILTRES:
            return {...state,idCountries:action.idCountries ,idGenres:action.idGenres ,order:action.order ,
                ratingFrom:action.ratingFrom ,ratingTo:action.ratingTo ,yearFrom:action.yearFrom,yearTo:action.yearTo }

        default: return state
    }
}

export const setMoviesFiltresState = (filtresState) =>
    ({type:SET_MOVIES_FILTRES,filtresState: filtresState})

export const setPagesFiltresCount = (count) =>
    ({type:SET_PAGES_COUNT_FILTRES,pagesCount: count})

export const setCurrenFiltrestPage = (currentPage)=>
    ({type:SET_CURRENT_PAGE_FILTRES, currentPage: currentPage})

export const setGenresCountry = (genres,country)=>
    ({type:SET_STATE_GENRES_COUNTRY, genres: genres,country: country})

export const setFiltres = (idCountries,idGenres,order,ratingFrom,ratingTo,yearFrom,yearTo)=>
    ({type:SET_FILTRES, idCountries: idCountries,idGenres: idGenres,order: order,
        ratingFrom: ratingFrom,ratingTo: ratingTo,yearFrom: yearFrom,yearTo:yearTo})




export default filtresReducer