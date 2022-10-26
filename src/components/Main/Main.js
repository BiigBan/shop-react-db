import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct, getProductOrder, setCategory } from '../../store/productSlice'
import GridComponent from './Grid/Grid'
import RowComponent from './Row/Row'
import RightSetting from './Settings/RightSetting'
import Settings from './Settings/Settings'

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

  if (!productsStore) {
    return <Box>Loading...</Box>
  }

  return (
    <Box sx={{ p: '16px', borderRadius: '8px', boxShadow: { sm: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)', xs: '0' }, flex: '1 1 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
        <Settings />
        <RightSetting />
      </Box>
      {grid === 'row' ? <RowComponent products={productsStore} /> : <GridComponent products={productsStore} />}
    </Box>
  )
}
