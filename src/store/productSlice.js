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
    async function ({category, order}, {dispatch}) {
        try {
            const {data} = await productAPI.orderProduct(category, order)
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
        setProduct: (state, action) => {
            state.products = action.payload.product
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

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;