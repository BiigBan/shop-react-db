import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ProfileNavbar from '../components/Profile/ProfileNavbar'

export default function Profile() {
    return (
        <Container maxWidth='xl'>
            <Box sx={{display: {md: 'flex', sm: 'block'}}}>
                <Box sx={{mr: '20px'}}>
                <ProfileNavbar/>
                </Box>
                    <Outlet/>
            </Box>
        </Container>
    )
}
