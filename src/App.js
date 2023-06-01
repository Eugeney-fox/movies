
import './App.css';
import { Route, Routes} from "react-router-dom";

import HeaderContainer from "./Components/Header/HeaderContainer";
import MoviesContainer from "./Components/Movies/MoviesContainer";
import Top250 from "./Components/Top/top250";
import Top100 from "./Components/Top/top100";
import React from "react";
import Await from "./Components/Top/Await";
import PremierContainer from "./Components/Premier/Premier.container";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import FiltresContainer from "./Components/Filtres/Filtres.container";



const App = (props) => {
  return (
        <div className="app-wrapper">
          <HeaderContainer store={props.store}/>
          < NavbarContainer store={props.store}/>
          <div className="content">
              <Routes>
                  <Route path="/" element={<MoviesContainer store={props.store}/>}/>
                  <Route path="/top100" element={<Top100 store={props.store}/>}/>
                  <Route path="/top250/*" element={<Top250 store={props.store}/>}/>
                  <Route path="/await/*" element={<Await store={props.store}/>}/>
                  <Route path="/premier/*" element={<PremierContainer store={props.store}/>}/>
                  <Route path="/filtres/*" element={<FiltresContainer store={props.store}/>}/>
              </Routes>
          </div>
        </div>


  );
}

export default App;
