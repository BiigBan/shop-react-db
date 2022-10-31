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

export const paginationProduct = createAsyncThunk(
    'product/paginationProduct',
    async function ({page, currentCategory}, {dispatch}) {
        try {
            const {data} = await productAPI.pagination(page, currentCategory)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const searchProduct = createAsyncThunk(
    'product/searchProduct',
    async function (value, {dispatch}) {
        try {
            const {data} = await productAPI.search(value);
            if (data.length === 0){
                return 'The goods doesn`t exist'
            }
            return data
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
        allProduct: 0,
        limitProducts: 20,
        currentPage: 1,
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
            state.allProduct = action.payload.length;
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
            state.allProduct = action.payload.length;
        },
        [getProductOrder.rejected]: (state, action) => {
            state.status = 'error';
        },
        [paginationProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [paginationProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
        },
        [paginationProduct.rejected]: (state, action) => {
            state.status = 'error';
        },
        [searchProduct.pending]: (state, action) => {
            state.status = 'loading';
        },
        [searchProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            if(typeof action.payload === 'string'){
                state.products = [];
                state.error = action.payload;
            } else {
            state.products = action.payload;
            // state.error = '';
            }
        },
        [searchProduct.rejected]: (state, action) => {
            state.status = 'error';
        },
    }
})

export const { setCategory, ascSort, descSort, mostRated, lowHigh, highLow } = productSlice.actions;

export default productSlice.reducer;