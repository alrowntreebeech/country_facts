import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
    "searchpage/loadCountries",
    async (searchTerm) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const json = await response.json()
        return json;
    }
)

export const searchPageSlice = createSlice({
    name: 'searchPage',
    initialState: [],
    reducers: {
        loadCountries: (state, action) => {
            state = action.payload.map(country => {
                return ({
                    name: country.name.common,
                    flag: country.flags.png,
                    alt: country.flags.alt
                })
            })
        }
    }
});

export const selectCountries = state => {
    return state.searchPage
}


export default searchPageSlice.reducer;
