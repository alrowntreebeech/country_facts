import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
    "searchpage/loadCountries",
    async (searchTerm) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        if (!response.ok) {
            return Promise.reject();
        }
        const data = await response.json();
        return data;
    }
)

export const searchPageSlice = createSlice({
    name: 'searchPage',
    initialState: {
        countryInfo: [],
            isLoadingCountry: false,
            failedtoLoadCountry: false,
    },
        extraReducers: (builder) => {
            builder 
                .addCase(loadCountries.pending, (state) => {
                    state.isLoadingCountry = true;
                    state.failedtoLoadCountry = false;
                })
                .addCase(loadCountries.fulfilled, (state, action) => {
                    state.isLoadingCountry = false;
                    state.countryInfo = action.payload;
                })
                .addCase(loadCountries.rejected, (state) => {
                    state.isLoadingCountry = false;
                    state.failedtoLoadCountry = true;
                } )
        }
    
});

export const selectCountries = state => {
    return state.searchPage.countryInfo;
}


export default searchPageSlice.reducer;
