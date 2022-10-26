
import { Button, Rating, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

export default function Item({ image, title, description, rating, price }) {
    const theme = useTheme();
    // category, description, image, price, title, rating{rate, count}
    return (
        <Box sx={{maxHeight: {sm: '180px', xs: 'auto'},flexDirection: {sm: 'row', xs: 'column'}, padding: '10px', display: 'flex', mb: '20px', transition: '0.3s', boxShadow: 'none', '&:hover': { boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }, '&::-webkit-scrollbar-thumb': { width: '4px', background: `${theme.palette.primary.dark}`, borderRadius: '3px' } }}>
            <Box maxWidth='120px' sx={{ mr: '20px', alignSelf:'center' }}>
                <img src={image} style={{ objectFit: 'contain', width: '100%', height: '100%', overflow: 'hidden' }} alt="image of product" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{flex: '1 1 auto'}}>
                    <Typography sx={{ mb: '10px' }} color='secondary' variant='span'>{title}</Typography>
                    <Typography sx={{ mb: '10px', '&::-webkit-scrollbar-thumb': { width: '4px', background: `${theme.palette.primary.dark}`, borderRadius: '3px' }, '&::-webkit-scrollbar': { width: '4px', background: `${theme.palette.primary.light}` } }} maxHeight='80px' overflow='auto' variant='body1' fontSize=''>{description}</Typography>
                    <Typography gutterBottom variant="h5" component="span">
                        {price}$
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', justifySelf: 'flex-end' }}>
                    <Box sx={{ width: '100px', display: 'flex', alignItems: 'center', mr: '40px' }}>
                        <Rating size='small' sx={{ mr: '10px' }} name="read-only" value={rating.rate} readOnly />
                        <Typography variant='span' component='span'>{rating.rate}</Typography>
                    </Box>
                    <Button variant='outlined' color='secondary' size="small">
                        <Box fontSize='14px' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <FavoriteBorderIcon />
                            Watch
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
