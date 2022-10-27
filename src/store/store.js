import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        product: productSlice,
        global: globalSlice,
        user: userSlice,
    }
})

window.store = store;

export default store;