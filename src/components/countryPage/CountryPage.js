import React from "react";
import { useSelector } from "react-redux";
import { selectCountryProfile } from "./countryPageSlice";
import { useParams } from "react-router-dom";
import "./countryPage.css";

const CountryPage = () => {

    const countryProfile = useSelector(selectCountryProfile);
    const { countryName } = useParams();

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
    }

    console.log(currenciesNames)

    

    

    return (
        <div className="countryPage">
            <h1>{countryName}</h1>
            {countryProfile.map(country => {
                return (
                    <div className="countryProfile">
                        <div className="countryFacts">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Common Name:</td> 
                                        <td>{country.name.common}</td>
                                    </tr>
                                    <tr>
                                        <td>Official Name:</td>
                                        <td>{country.name.official}</td>
                                    </tr>
                                    <tr>
                                        <td>Capital City:</td>
                                        <td>
                                            {country.capital.map(city => {
                                            return city 
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Continents: </td>
                                    <   td>{country.continents.map(continent => continent)}</td>
                                    </tr>
                                    <tr>
                                        <td>Population:</td>
                                        <td>{country.population}</td>
                                    </tr>
                                    <tr>
                                        <td>Languages:</td>
                                        <td>{Object.values(country.languages)}</td>
                                    </tr>
                                    <tr>
                                        <td>Demonyms:</td>
                                        <td>
                                            {country.demonyms.eng.f} &#9792; <br/>
                                            {country.demonyms.eng.m} &#9794;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Currencies:</td>                            
                                        <td>{currenciesNames.map(currency => {
                                            return <p>{currency}</p>
                                            })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flag">
                            <p>Flag:</p>
                            <img src={country.flag} alt={country.alt}/>
                        </div> 
                    </div>
                    )
                })}
           
        </div>
    )
}

export default CountryPage;