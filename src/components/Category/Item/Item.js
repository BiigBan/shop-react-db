import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Children } from 'react'

export default function Item({ name, img }) {
    const Image = img;
    const theme = useTheme()
    return (
        <Box sx={{
            cursor: 'pointer', mb: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: { lg: '1 1 8.3333%', md: '1 1 16.6666%', sm: '1 1 25%', xs: '1 1 50%' }, '&:hover': {
                color: `${theme.palette.secondary.main}`,
                '& *': { fill: `${theme.palette.secondary.main}` },
            }
        }}>
            <div>
                <Image alt="category icon" />
            </div>
            <Typography fontSize={{ xl: '14px', lg: '16px' }} textAlign='center'>{name}</Typography>
        </Box>
    )
}
