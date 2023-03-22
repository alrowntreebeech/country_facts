import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationBar.css";

const NavigationBar =() => {
    return(
        <nav>
            <NavLink to="/" className={ ({ isActive }) => isActive ? 'active-navlink' : 'inactive-navlink' }><h4>Home Page</h4></NavLink>
              
            <NavLink to="/search" className={ ({ isActive }) => isActive ? 'active-navlink' : 'inactive-navlink' } ><h4>Country Search</h4></NavLink>
            
            <h4>
                Saved Countries
            </h4>
            <h4>
                Games and Flashcards
            </h4>
        </nav>
    )
}

export default NavigationBar;