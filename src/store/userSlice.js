import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../@api/api";

export const registerUser = createAsyncThunk(
    'user/register',
    async function (userData, dispatch) {
        try {
            const { data } = await userAPI.register(userData)
            let id = data.id;
            let result = { id, ...data.data }
            return result;
        } catch (error) {
            return error
        }
    }
)

export const checkExistUser = createAsyncThunk(
    'user/checkExist',
    async function (email, dispatch) {
        try {
            const result = await userAPI.exist(email)
            if(result === 'User is exist'){
                return 'User is exist'
            }
            return 'User doesn`t exist'
        } catch (error) {
            return error
        }
    }
)

export const setUser = createAsyncThunk(
    'user/setUser',
    async function (email, dispatch) {
        try {
            const data = await userAPI.setUser(email)
            return data[0];
        } catch (error) {
            return error
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: 1,
            username: "Denis",
            email: "test1@gmail.com",
            password: "qwerty123",
            sex: "male",
            image: "https://www.clipartmax.com/png/middle/319-3191274_male-avatar-admin-profile.png",
            selectedGoods: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "man's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                }
            ]
        },
        status: null,
        loading: 'loading',
        error: '',
        isAuth: false,
        existUser: false,
    },
    reducers: {
        setGrid: (state, action) => {
            state.grid = action.payload.alignment;
        },
        setNullExistUser: (state, action) => {
            state.existUser = false;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.status = 'pending';
        },
        [registerUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            state.status = 'resolved';
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [checkExistUser.pending]: (state, action) => {
            state.status = 'pending';
        },
        [checkExistUser.fulfilled]: (state, action) => {
            if(action.payload === 'User is exist') {
                state.existUser = true;
            } else {
                state.existUser = false;
            }
            // state.status = 'resolved';
        },
        [checkExistUser.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [setUser.pending]: (state, action) => {
            state.status = 'pending';
            state.loading = 'loading';
        },
        [setUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            state.loading = 'resolve';
            state.status = 'resolved';
        },
        [setUser.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
    }
})

export const { setGrid, setNullExistUser, setStatus } = userSlice.actions;

export default userSlice.reducer;