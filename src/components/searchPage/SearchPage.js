import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries, loadCountries } from "./searchPageSlice";
import { Link } from "react-router-dom";
import "./searchPage.css";

const SearchPage = () => {
    
    const [searchTerm, setSearchTerm] = useState(""); 
    const dispatch = useDispatch();
    const countryResults = useSelector(selectCountries)


    return(
        <div className="searchPage">
            <h1>Country Search</h1>
            <div className="form" >
                <div className="input">
                    <label htmlFor="country">Search for a Country:</label><br/>
                    <input type="text" id="country" name="country" onChange={(e) => setSearchTerm(e.currentTarget.value)}/>
                </div>
            </div>
            <div className="searchResults">
                {countryResults.map(country => {
                    return <div className="countryResult" key={country.name}>
                        <Link to={`${country.name}`}><h4>{country.name}</h4></Link>
                        <img className="countryFlag" src={country.flag} alt={country.alt}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchPage;