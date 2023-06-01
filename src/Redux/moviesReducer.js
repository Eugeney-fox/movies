const SET_MOVIES = 'SET_MOVIES'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TYPE_TOP = 'SET_TYPE_TOP'



let initialState = {
    movies:[
        {
            nameRu:"",
            posterUrlPreview: "",
            rating: "",
            genres:[]

        }
    ],
    pagesCount: "",
    currentPage: 1,
    type: "top",
    typeTop: "TOP_AWAIT_FILMS",
}
const moviesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_MOVIES:
            return {...state,movies:action.movies}
        case SET_PAGES_COUNT:
            return {...state,pagesCount: action.pagesCount}
        case SET_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}
        case SET_TYPE_TOP:
            return {...state,typeTop: action.typeFilmsTop}
        default:
            return state
    }
}


export const setMoviesState = (movies) =>
    ({type:SET_MOVIES,movies: movies})

export const setPagesCount = (count) =>
    ({type:SET_PAGES_COUNT,pagesCount: count})

export const setCurrentPage = (currentPage)=>
    ({type:SET_CURRENT_PAGE, currentPage: currentPage})


export const setTypeTop = (typeTop)=>
    ({type:SET_TYPE_TOP, typeFilmsTop: typeTop})



export default moviesReducer