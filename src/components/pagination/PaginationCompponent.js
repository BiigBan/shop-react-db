import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { paginationProduct } from '../../store/productSlice';

export default function PaginationComponent() {

  const [page, setPage] = React.useState(1);
  const [searchPage, setSearchPage] = useSearchParams();
  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const searchParam = searchPage.get('grid');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(paginationProduct({page}))
    setSearchPage({grid: searchParam ,page: page})
  }, [page])

  const allProduct = useSelector(state => state.product.allProduct);
  const limit = useSelector(state => state.product.limitProducts);

  const countPag = Math.ceil(allProduct/limit);



  return (
    <Stack spacing={2}>
        <Pagination count={countPag} page={page} onChange={handleChange} variant="outlined" color="secondary" />
    </Stack>
  )
}
