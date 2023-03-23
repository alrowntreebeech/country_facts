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
    initialState: [
        {
            name: "Guatemala",
            flag: "https://flagcdn.com/w320/gt.png",
            alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
        },
        {
            name: "Germany",
            flag: "https://flagcdn.com/w320/de.png",
            alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold."
        },
        {
            name: "Georgia",
            flag: "https://flagcdn.com/w320/ge.png",
            alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter."
        },
        {
            name: "Gabon",
            flag: "https://flagcdn.com/w320/ga.png",
            alt: "The flag of Gabon is composed of three equal horizontal bands of green, yellow and blue."
        }
    ],
    reducers: {
        loadCountries: (state, action) => {
            state = action.payload.map(country => {
                return ({
                    name: country.name.common,
                    flag: country.flags.svg,
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
