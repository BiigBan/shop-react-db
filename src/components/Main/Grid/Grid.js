import { Grid } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from './Item/Item';

export default function GridComponent({products}) {

    return (
        <Grid container spacing={2}>
            {products.map(item => {
                return <Item key={item.id} {...item} />
            })}
        </Grid>
    )
}
