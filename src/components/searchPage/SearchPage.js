import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries, loadCountries, selectFailedSearch, selectLoadingSearch } from "./searchPageSlice";
import { Link, useLocation } from "react-router-dom";
import "./searchPage.css";

const SearchPage = () => {
    
    const [searchTerm, setSearchTerm] = useState(""); 

    const dispatch = useDispatch();
   
    const countryResults = useSelector(selectCountries);
    const failedSearch = useSelector(selectFailedSearch);
    const loadingSearch = useSelector(selectLoadingSearch);

    const location = useLocation();

    useEffect(() => {
        setSearchTerm("");
    }, [location]);


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loadCountries(searchTerm));
    };


    return(
        <div className="searchPage">
            <h1>Country Search</h1>
            <div className="form" >
                <form className="userForm" onSubmit={handleSubmit}>
                    <label htmlFor="country">Search for a Country:</label><br/>
                    <input type="text" id="country" name="country" onChange={(e) => setSearchTerm(e.currentTarget.value)}/>
                    <button type="submit" className="searchButton" value="submit">
                    Search
                    </button>
                </form>
            </div>
            {loadingSearch ? <h2>Loading Page....</h2> : null}
            {failedSearch ? (
                <div className="failedSearch">
                    <h3>No countries found... try again!!!</h3>
                    <img className="jollyRoger" src={require("../../assets/jolly_roger.png")} alt="Jolly Roger Flag"/>
                </div>
            ) : (
                <div className="searchResults">
                    {countryResults.map((country, index) => {
                        return <div className="countryResult" key={index}>
                            <Link to={`${country.name.common}`}><h4>{country.name.common}</h4></Link>
                            <div className="flagContainer"> 
                                <img className="countryFlag" src={country.flags.png} alt={country.flags.alt}/>
                            </div>
                        </div>
                    })}
                </div>
            )}          
        </div>
    )
}

export default SearchPage;