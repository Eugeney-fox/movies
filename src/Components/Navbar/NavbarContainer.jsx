import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state)=>{
    return {listNavbar: state.header.listNavbar,
            currentUrl:state.header.currentUrl}
}

const NavbarContainer = connect(mapStateToProps,)(Navbar)
export default NavbarContainer