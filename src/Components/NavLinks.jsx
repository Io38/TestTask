import React from "react";
import {NavLink} from "react-router-dom";


const NavLinks = () => {

    return (
        <div>
            <div>
                <NavLink to="/News" activeClassName='activeLink'>News</NavLink>
            </div>

            <div>
                <NavLink to="/Newest" activeClassName='activeLink'>Newest</NavLink>
            </div>
        </div>

    )
}
export default NavLinks