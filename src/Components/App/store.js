import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from '../../features/Slices/cartSlice'
import sliderReducer from '../../features/Slices/SliderSlice'
import { gameApi } from "../../services/games";

export const store = configureStore({
    reducer:{
       cart:cartReducer,
        slider:sliderReducer,
        [gameApi.reducerPath]: gameApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApi.middleware),
})

setupListeners(store.dispatch)