import { Box } from '@mui/system'
import React from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography/Typography';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProfileInfo() {

    const userImage = useSelector(state => state.user.user.image);
    const userName = useSelector(state => state.user.user.username);
    const userSex = useSelector(state => state.user.user.sex);

    const isAuth = useSelector(state => state.user.isAuth);

    const theme = useTheme();

    if (!isAuth) {
        return (
            <Box sx={{margin: '30px auto 0 auto'}}>
                <Link style={{ textDecoration: 'none' }} to='/login'>
                    <Button color='secondary' sx={{ color: `${theme.palette.primary.main}` }} variant='contained'>Sign In</Button>
                </Link>
            </Box>
        )
    }

    return (
        <Box sx={{ padding: '15px' }}>
            <Box sx={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', mb: '20px' }}>
                <img width='100%' src={userImage} alt='Image of user' />
            </Box>
            <Divider sx={{ mb: '20px' }} />
            <Box mb='20px'>
                <Typography color={theme.palette.secondary.dark} fontSize='48px'>{userName}</Typography>
                <Typography fontSize='36px'>{userSex}</Typography>
            </Box>
            <Link style={{ textDecoration: 'none' }} to='/profile/settings'>
                <Button color='secondary' sx={{ color: `${theme.palette.primary.main}` }} variant='contained'>Change information</Button>
            </Link>
        </Box>
    )
}
