import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { paginationProduct } from '../../store/productSlice';

export default function PaginationComponent() {

  const [searchPage, setSearchPage] = useSearchParams();
  let currentPage = searchPage.get('page');
  if(currentPage === null){
    currentPage = 1;
  }
  const [page, setPage] = React.useState(+currentPage);
  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const searchParam = searchPage.get('grid');
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.product.currentCategory)

  useEffect(() => {
    dispatch(paginationProduct({page, currentCategory}))
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
