import {connect} from "react-redux";
import {
    setCurrenFiltrestPage, setFiltres,
    setGenresCountry,
    setMoviesFiltresState,
    setPagesFiltresCount
} from "../../Redux/filtresReducer";
import Filtres from "./Filtres";



let mapStateToProps = (state)=>{
    return {
        state: state.filtresMovies
    }
}




const FiltresContainer = connect(mapStateToProps,
    {setMoviesFiltresState,setPagesFiltresCount,setCurrenFiltrestPage,setGenresCountry,setFiltres})(Filtres)
export default FiltresContainer