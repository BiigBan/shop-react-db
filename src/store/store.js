import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";


const store = configureStore({
    reducer: {
        product: productSlice
    }
})

window.store = store;

export default store;