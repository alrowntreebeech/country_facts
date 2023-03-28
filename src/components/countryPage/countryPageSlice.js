import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountryProfile = createAsyncThunk(
    "countryPage/loadCountryProfile", 
    async (countryName) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const json = await response.json();
        return json;
})


const countryPageSlice = createSlice({
    name: "countryPage",
    initialState: {
        countryProfile: [{
            name:{
                common:"",
                nativeName:{}
            },
            tld:[],
            cca2:"",
            ccn3:"",
            cca3:"",
            cioc:"",
            independent: true,
            status:"",
            unMember: true,
            currencies: {},
            idd: {},
            capital: [],
            altSpellings: [],
            region: "",
            subregion: "",
            languages: {},
            translations: {},
            latlng: [],
            landlocked: false,
            borders: [],
            area: 0,
            demonyms:{eng:{}},
            flag:"",
            maps:{},
            population: 0,
            gini: {},
            fifa: "",
            car:{},
            timezones: [],
            continents: [],
            flags:{},
            coatOfArms:{},
            startOfWeek:"",
            capitalInfo:{},
            postalCode:{}
        }]
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryProfile.pending, (state) => {
                state.isLoadingCountry = true;
                state.failedToLoadCountry = false;
            })
            .addCase(loadCountryProfile.fulfilled, (state, action) => {
                state.isLoadingCountry = false;
                state.countryProfile = action.payload;
            })
            .addCase(loadCountryProfile.rejected, (state) => {
                state.isLoadingCountry = false;
                state.failedToLoadCountry = true;
            })
    }
});

export const selectCountryProfile = state => {
    return state.countryPage.countryProfile;
};

export const selectCountryPageLoadStatus = state => {
    return state.countryPage.isLoadingCountry;
}

export default countryPageSlice.reducer;