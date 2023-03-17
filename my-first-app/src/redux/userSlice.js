import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    name: "",
    email: "",
    token:"",
    id: "",
    isLoading: false,
    error: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            const { name, email, token, id } = action.payload || {};
            state.name = name || "";
            state.email = email || "";
            state.token = token || "";
            state.id = id || "";
        },
    }
});


export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;