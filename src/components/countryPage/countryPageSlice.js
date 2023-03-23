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
        flag:{
            "png":"https://flagcdn.com/w320/gt.png"
        }

    }],
    reducers: {

    }
});

export default countryPageSlice.reducer;