import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../../features/Slices/cartSlice'
import sliderReducer from '../../features/Slices/SliderSlice'

export const store = configureStore({
    reducer:{
       cart:cartReducer,
        slider:sliderReducer,
    }
})