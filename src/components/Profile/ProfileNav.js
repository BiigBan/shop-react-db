import { useTheme } from '@emotion/react'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileNav() {
    const theme = useTheme()
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', py: '10px'}}>
            <Link style={{ textDecoration: 'none' }} to='/profile/my-profile'>
                <IconButton sx={{ width: '100%', borderRadius: '8px', '&:hover': { color: `${theme.palette.secondary.dark}`, background: `${theme.palette.secondary.light}` } }}>
                    <Typography sx={{ '&:hover': { color: `${theme.palette.secondary.dark}` } }} transition='0.3s' color={`${theme.palette.secondary.main}`} textAlign='center'>My Profile</Typography>
                </IconButton>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/profile/settings'>
                <IconButton sx={{ borderRadius: '8px', '&:hover': { color: `${theme.palette.secondary.dark}`, background: `${theme.palette.secondary.light}` } }}>
                    <Typography sx={{ '&:hover': { color: `${theme.palette.secondary.dark}` } }} transition='0.3s' color={`${theme.palette.secondary.main}`} textAlign='center'>Settings</Typography>
                </IconButton>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/profile/my-cart'>
                <IconButton sx={{ borderRadius: '8px', '&:hover': { color: `${theme.palette.secondary.dark}`, background: `${theme.palette.secondary.light}` } }}>
                    <Typography sx={{ '&:hover': { color: `${theme.palette.secondary.dark}` } }} transition='0.3s' color={`${theme.palette.secondary.main}`} textAlign='center'>My cart</Typography>
                </IconButton>
            </Link>
            <IconButton sx={{ borderRadius: '8px', '&:hover': { color: `${theme.palette.secondary.dark}`, background: `${theme.palette.secondary.light}` } }}>
                <Typography sx={{ '&:hover': { color: `${theme.palette.secondary.dark}` } }} transition='0.3s' color={`${theme.palette.secondary.main}`} textAlign='center'>Log out</Typography>
            </IconButton>
        </Box>
    )
}
