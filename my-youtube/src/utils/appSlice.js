import { createSlice } from "@reduxjs/toolkit";

const apiSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
});

export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;