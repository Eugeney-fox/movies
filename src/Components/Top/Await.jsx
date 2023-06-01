import MoviesContainer from "../Movies/MoviesContainer";
import {setTypeTop} from "../../Redux/moviesReducer";



let Await = (props)=>{
    let a = 'TOP_AWAIT_FILMS'
    props.store.dispatch(setTypeTop(a))
    return <MoviesContainer store={props.store}/>




}

export default Await