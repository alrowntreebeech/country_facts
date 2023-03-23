import React from "react";
import { useSelector } from "react-redux";
import { selectCountries } from "./searchPageSlice";
import { Link } from "react-router-dom";
import "./searchPage.css";

const SearchPage = () => {
    
    const countryResults = useSelector(selectCountries);

    return(
        <div className="searchPage">
            <h1>Country Search</h1>
            <div className="form">
                <div className="input">
                    <label htmlFor="country">Country Search:</label>
                    <input type="text" id="country" name="country" required/>
                </div>
                <div className="searchButton">
                    <input type="submit" className="button" id="countrySearchButton" value="Search" onSubmit={() => {}}></input>
                </div>
            </div>
            <div className="searchResults">
                {countryResults.map(country => {
                    return <div className="countryResult">
                        <Link to={`${country.name}`}><h4>{country.name}</h4></Link>
                        <img className="countryFlag" src={country.flag} alt={country.alt}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchPage;