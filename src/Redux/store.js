
import {combineReducers, legacy_createStore as createStore} from "redux";
import moviesReducer from "./moviesReducer";
import headerReducer from "./headerReducer";
import premierReducer from "./premierReducer";
import filtresReducer from "./filtresReducer";


let reducers = combineReducers({
    header: headerReducer,
    movies: moviesReducer,
    premierMovies: premierReducer,
    filtresMovies: filtresReducer,


})

let store = createStore(reducers)


export default store
