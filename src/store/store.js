import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer: {
        product: productSlice,
        global: globalSlice,
    }
})

window.store = store;

export default store;