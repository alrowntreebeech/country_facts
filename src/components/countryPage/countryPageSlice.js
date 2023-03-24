import { createSlice } from "@reduxjs/toolkit";

const countryPageSlice = createSlice({
    name: "countryPage",
    initialState: [{
        name:{
            common:"Guatemala",
            official: "Republic of Guatemala"
        },
        currencies:{
            GTQ:{
                name:"Guatemalan quetzal"
            },
            RND: {
                name: "Random currency"
            }
        },
        capital:["Guatemala City"],
        languages:{
            spa:"Spanish"
        },
        demonyms:{
            eng:{
                f: "Guatemalan",
                m: "Guatemalan"
            }
        },
        population: 16858333,
        continents:["North America"],
        flag: "https://flagcdn.com/w320/gt.png",
        alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."     

    }],
    reducers: {

    }
});

export const selectCountryProfile = state => {
    return state.countryPage
}

export default countryPageSlice.reducer;