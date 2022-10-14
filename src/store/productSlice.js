import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async function ({ param1 = 'en', param2 = 'True' }, { dispatch }) {
        try {
            const { data } = await axios.get(``) 
            return data.articles;
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
        status: null
    },
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload.product
        }
    },
    extraReducers: {
        [getProduct.pending]:  (state, action) => {
            state.status = 'loading';
        },
        [getProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
        },
        [getProduct.rejected]: (state, action) => {
            state.status = 'error';
        },
    }
})

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;