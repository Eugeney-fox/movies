
import MoviesContainer from "../Movies/MoviesContainer";
import {setCurrentPage, setTypeTop} from "../../Redux/moviesReducer";
import {setCurrentUrl} from "../../Redux/headerReducer";



let Top100 = (props)=>{
    let a = 'TOP_100_POPULAR_FILMS'

    props.store.dispatch(setTypeTop(a))
    props.store.dispatch(setCurrentPage(1))
    props.store.dispatch(setCurrentUrl('Топ100'))

    return <MoviesContainer store={props.store}/>




}

export default Top100