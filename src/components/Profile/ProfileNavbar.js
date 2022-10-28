import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileIntro from './ProfileIntro'
import ProfileNav from './ProfileNav'

export default function ProfileNavbar() {


    return (
        <Box sx={{ maxWidth: { sm: '240px', xs: '100%' }, padding: '20px', borderRadius: '8px', boxShadow: { sm: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)', xs: '0' }, margin: '0' }}>
            <Box sx={{ display: 'flex', flexDirection:'column', mr: '20px', justifyContent: 'center', margin: '0 auto' }}> {/*flexWrap: { sm: 'wrap', xs: 'nowrap' }*/}
                <Box sx={{ mb: '20px', justifySelf: 'flex-start' }}>
                    <ProfileIntro />
                </Box>
                <Divider sx={{ display: { sm: 'block', xs: 'none' } }} />
                <Box>
                    <ProfileNav />
                </Box>
            </Box>
        </Box>
    )
}
