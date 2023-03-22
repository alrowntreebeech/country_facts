import { createSlice } from "@reduxjs/toolkit";

export const searchPageSlice = createSlice({
    name: 'searchPage',
    initialState: [],
    reducers: {
        displayCountries: (state, action) => {
            state = action.payload.map(country => {
                return ({
                    name: country.name,
                    flag: country.flag
                })
            })
        }
    }
});

export const { displayCountries } = searchPageSlice.actions;
export default searchPageSlice.reducer;
