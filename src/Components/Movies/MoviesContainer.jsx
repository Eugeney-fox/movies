import {connect} from "react-redux";
import Movies from "./Movies";
import {setCurrentPage, setMoviesState, setPagesCount} from "../../Redux/moviesReducer";
import {setMoviesPremierState} from "../../Redux/premierReducer";

let mapStateToProps = (state)=>{
    return {movies: state.movies.movies,
            pagesCount: state.movies.pagesCount,
            currentPage: state.movies.currentPage,
            newSearchText: state.header.newSearchText,
            typeFilms: state.movies.type,
            typeTopFilms: state.movies.typeTop,
    }
}




const MoviesContainer = connect(mapStateToProps,{setMoviesState,setPagesCount,setCurrentPage,setMoviesPremierState})(Movies)
export default MoviesContainer