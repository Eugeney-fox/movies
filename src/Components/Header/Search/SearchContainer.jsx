
import {connect} from "react-redux";
import Search from "./Search";
import {updateNewSearchText} from "../../../Redux/headerReducer";
import {setMoviesState, setPagesCount} from "../../../Redux/moviesReducer";

let mapStateToProps = (state)=>{
    return {searchPlaceholder: state.header.searchPlaceholder,
            newSearchText: state.header.newSearchText,
            currentPage: state.movies.currentPage}
}




const SearchContainer = connect(mapStateToProps,{updateNewSearchText,setPagesCount,setMoviesState})(Search)
export default SearchContainer