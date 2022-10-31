import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function PaginationComponent() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const allProduct = useSelector(state => state.product.allProduct);
  const limit = useSelector(state => state.product.limitProducts);

  const countPag = Math.ceil(allProduct/limit);

  const param = useParams();

  useEffect(() => {
    const path = window.location.pathname;
    // console.log(path);
    // console.log(param);
    // console.log(page);
  }, [])

  return (
    <Stack spacing={2}>
        <Pagination count={countPag} page={page} onChange={handleChange} variant="outlined" color="secondary" />
    </Stack>
  )
}
