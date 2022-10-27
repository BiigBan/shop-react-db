import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Settings from './../components/Main/Settings/Settings'
import RightSetting from './../components/Main/Settings/RightSetting'
import RowComponent from './../components/Main/Row/Row'
import GridComponent from './../components/Main/Grid/Grid'
import { getProduct, getProductOrder, setCategory } from '../store/productSlice'
import Navbar from '../components/Navbar/Navbar'
import Loader from '../components/@loader/Loader'

export default function Main() {
    const dispatch = useDispatch();
    const productsStore = useSelector(state => state.product.products);

    const { category } = useParams();
    const { grid } = useParams();

    useEffect(() => {
        dispatch(getProductOrder({ category: category }))
        dispatch(setCategory({ category }))
    }, [category])

    useEffect(() => {
        if (!category) dispatch(getProduct())

    }, [])

    const loading = useSelector(state => state.user.loading);

    if (loading === 'pending') {
        return <Loader />
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: '40px' }}>
            <Box sx={{ display: { md: 'flex', xs: 'block' } }}>
                <Box sx={{ margin: { md: '0 24px 0 0', xs: '0 0 20px 0' } }}>
                    <Navbar />
                </Box>
                <Box sx={{ p: '16px', borderRadius: '8px', boxShadow: { sm: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)', xs: '0' }, flex: '1 1 auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                        <Settings />
                        <RightSetting />
                    </Box>
                    {grid === 'row' ? <RowComponent products={productsStore} /> : <GridComponent products={productsStore} />}
                </Box>
            </Box>
        </Box>
    )
}