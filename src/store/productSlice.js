import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productAPI } from "../@api/api";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async function () {
        try {
            const { data } = await productAPI.getProduct();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const getProductOrder = createAsyncThunk(
    'product/getProductOrder',
    async function ({category}, {dispatch}) {
        try {
            const {data} = await productAPI.orderProduct(category)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            {
                id: 0,
                title: "",
                price: 0,
                description: "",
                category: "",
                image: "",
                rating: {
                    rate: 0,
                    count: 0
                }
            }
        ],
        status: null,
        currentCategory: '',
    },
    reducers: {
        setCategory: (state, action) => {
            state.currentCategory = action.payload.category;
        },
        ascSort: (state) => {
            state.products = state.products.sort((a, b) => a.title.localeCompare(b.title))
        },
        descSort: (state) => {
            state.products = state.products.sort((a, b) => b.title.localeCompare(a.title))
        },
        mostRated: (state) => {
            state.products = state.products.sort((a,b) => b.rating.rate - a.rating.rate)
        },
        lowHigh: (state) => {
            state.products = state.products.sort((a,b) => a.price - b.price)
        },
        highLow: (state) => {
            state.products = state.products.sort((a,b) => b.price - a.price)
        }
    },
    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
        },
        [getProduct.rejected]: (state, action) => {
            state.status = 'error';
        },
        [getProductOrder.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProductOrder.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
        },
        [getProductOrder.rejected]: (state, action) => {
            state.status = 'error';
        },
    }
})

export const { setCategory, ascSort, descSort, mostRated, lowHigh, highLow } = productSlice.actions;

export default productSlice.reducer;