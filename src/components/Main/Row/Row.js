import { Box } from '@mui/system';
import React from 'react'
import Item from './Item/Item';

export default function RowComponent({products}) {
  return (
    <Box>
      {products.map(item => {
        return <Item key={item.id} {...item}/>
      })}
    </Box>
  )
}
