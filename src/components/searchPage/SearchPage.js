import React from "react";
import "./searchPage.css";

const SearchPage = () => {
    
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

            </div>
        </div>
    )
}

export default SearchPage;