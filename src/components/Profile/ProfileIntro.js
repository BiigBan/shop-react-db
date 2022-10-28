import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export default function ProfileIntro() {
    const userImage = useSelector(state => state.user.user.image);
    const userName = useSelector(state => state.user.user.username);
    const userSex = useSelector(state => state.user.user.sex);
    return (
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ overflow: 'hidden',width: '100px', height: '100px', borderRadius: '50%', mr: '20px'}}>
                    <img style={{ width: '100%', objectFit: 'contain' }} src={userImage} alt="User image" />
                </Box>
                <Box>
                    <Typography textAlign='start' color='secondary' component='h4' fontSize='24px'>{userName}</Typography>
                    <Typography textAlign='start' component='h5' fontSize='18px'>{userSex}</Typography>
                </Box>
            </Box>
    )
}
