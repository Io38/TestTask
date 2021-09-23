import React from "react";
import {NavLink} from "react-router-dom";


const NavLinks = () => {

    return (
        <div>
            <div>
                <NavLink to="/News">News</NavLink>
            </div>

            <div>
                <NavLink to="/Newest">Newest</NavLink>
            </div>
        </div>

    )
}
export default NavLinks