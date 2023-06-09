import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountryProfile, loadCountryProfile, selectCountryPageLoadStatus } from "./countryPageSlice";
import { useParams } from "react-router-dom";
import "./countryPage.css";

const CountryPage = () => {

    const countryProfile = useSelector(selectCountryProfile);
    const loadStatus = useSelector(selectCountryPageLoadStatus);
    const { countryName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const countryData = countryName.toLowerCase();
        dispatch(loadCountryProfile(countryData));
    }, [countryName, dispatch]);

    if (loadStatus) {
        return <h2>Loading Country Page...</h2>
    }

    // Access to the country currencies
    const currenciesArray = countryProfile.map(country => country.currencies);

    // Assign object in array to variable
    const currenciesObject = currenciesArray[0];

    // Get the currency codes
    const currenciesShorthand = Object.keys(currenciesObject);

    // Assign currency codes and names to an array
    const currenciesNames = []
    for (let i = 0; i < currenciesShorthand.length; i++) {
        currenciesNames.push(`${currenciesShorthand[i]}: ${currenciesObject[currenciesShorthand[i]].name}`)
    };


    return (
        <div className="countryPage">
            <h1>{countryName}</h1>
            {countryProfile.map((country, index) => {
                return (
                    <div className="countryProfile" key={index}>
                        <div className="countryFacts">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="rowTitle">Common Name:</td> 
                                        <td>{country.name.common}</td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Official Name:</td>
                                        <td>{country.name.official}</td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Capital City:</td>
                                        <td>
                                            {country.capital.map((city, index) => {
                                            return <li key={index}>{city}</li>
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Continents: </td>
                                    <   td>{country.continents.map(continent => continent)}</td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Population:</td>
                                        <td>{country.population.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Languages:</td>
                                        <td id="languagesCell">
                                            <ul>
                                                {Object.values(country.languages).map((language, index) => {return <li key={index}>{language}</li>})}
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Demonyms:</td>
                                        <td>
                                            {country.demonyms.eng.f} &#9792; <br/>
                                            {country.demonyms.eng.m} &#9794;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rowTitle">Currencies:</td>                            
                                        <td>{currenciesNames.map((currency, index) => {
                                            return <p key={index}>{currency}</p>
                                            })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flag">
                            <p>Flag:</p>
                            <div className="countryPageFlagContainer">
                                <img src={country.flags.svg} alt={country.flags.alt}/>
                            </div>
                        </div> 
                    </div>
                    )
                })}
           
        </div>
    )
}

export default CountryPage;