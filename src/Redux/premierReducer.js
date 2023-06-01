const SET_MOVIES_PREMIER = 'SET_MOVIES_PREMIER'
const SET_MONTH_PREMIER ='SET_MONTH_PREMIER'
const SET_YEAR_PREMIER = 'SET_YEAR_PREMIER'



let initialState = {
    premier: [
        {
            nameRu:"",
            posterUrlPreview: "",
            premierRu: "",
            genres:[]
        },

    ],
    year:"2023",
    month:"JANUARY"

}
const premierReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_MOVIES_PREMIER:
            return {...state,premier: action.premierState}
        case SET_YEAR_PREMIER:
            return {...state,year: action.year}
        case SET_MONTH_PREMIER:
            return {...state,month: action.month}
        default: return state
    }
}

export const setMoviesPremierState = (premierState) =>
    ({type:SET_MOVIES_PREMIER,premierState: premierState})

export const setYearPremier = (year) =>
    ({type:SET_YEAR_PREMIER,year: year})

export const setMonthPremier = (month) =>
    ({type:SET_MONTH_PREMIER,month: month})
export default premierReducer