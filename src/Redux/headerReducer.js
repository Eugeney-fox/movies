const SET_CURRENT_URL= 'SET_CURRENT_URL'

const UPDATE_NEW_SEARCH_TEXT = 'UPDATE_NEW_SEARCH_TEXT'

let initialState = {
    newSearchText:"",
    searchPlaceholder:'Поиск',
    list: [
        {name:'Топ100', link:'/top100'},
        {name:'Топ250', link:'/top250'},
    ],
    listNavbar:[
        {name:'Фильтр',link:'/filtres'},
        {name:'Кинопремьеры',link:'/premier'},
    ],
    scroll: false,
    currentUrl: ''
}
const headerReducer = (state = initialState, action)=> {
    switch (action.type) {
        case UPDATE_NEW_SEARCH_TEXT:
            return {...state,newSearchText:action.newSearchText}
        case SET_CURRENT_URL:
            return {...state, currentUrl: action.currentUrl}
        default: return state
    }
}

export const updateNewSearchText = (text) =>
    ({type:UPDATE_NEW_SEARCH_TEXT,newSearchText: text})

export const setCurrentUrl = (currentUrl)=>
    ({type:SET_CURRENT_URL, currentUrl: currentUrl})
export default headerReducer