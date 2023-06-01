import {connect} from "react-redux";


import Premier from "./Premier";
import {setMonthPremier, setMoviesPremierState, setYearPremier} from "../../Redux/premierReducer";
import store from "../../Redux/store";

let mapStateToProps = (state)=>{
    return {premierMovies: state.premierMovies.premier,
            newSearchText: state.header.newSearchText,
            year: state.premierMovies.year,
            month: state.premierMovies.month,
            store: store
    }
}




const PremierContainer = connect(mapStateToProps,{setMoviesPremierState,setYearPremier,setMonthPremier})(Premier)
export default PremierContainer