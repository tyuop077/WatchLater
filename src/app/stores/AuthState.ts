import { createSlice } from '@reduxjs/toolkit'

export const authState = createSlice({
    name: 'isAuthorized',
    initialState: {
        value: Boolean(localStorage.getItem("token")),
    },
    reducers: {
        setAuthorized: (state) => {
            state.value = true;
        },
        setUnauthorized: (state) => {
            state.value = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAuthorized, setUnauthorized } = authState.actions

export default authState.reducer