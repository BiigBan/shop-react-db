import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system'
import React from 'react'

export default function Loader() {
    return (
        <Box sx= {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </Box>
    )
}
