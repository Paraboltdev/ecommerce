import { createSlice } from "@reduxjs/toolkit";


export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        value:0,
        lenght: 4,
    },
    reducers:{
        nextSlide(state, action) {
            console.log('action',action.payload)
            console.log('state',state)
            state.value= action.payload > state.lenght ? 0 : action.payload
        },
        prevSlide(state,action) {
            state.value = action.payload>0 ? state.lenght : action.payload

        },
        dotSlide() {},
    },
});

export const {nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;