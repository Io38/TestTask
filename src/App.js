import React from "react";
import {Route} from "react-router-dom";
import News from "./Components/News";
import Newest from "./Components/Newest";
import NavLinks from "./Components/NavLinks";

function App() {


    return (
        <div className={App}>

        <NavLinks/>


        <Route path='/News'
               render={() => <News/>}/>

    <Route path='/Newest'
               render={() => <Newest/>}/>
        </div>
    )
}

export default App;
