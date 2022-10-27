import { useTheme } from '@emotion/react';
import { Error } from '@mui/icons-material';
import { Button, Radio, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { ErrorMessage, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Loader from '../components/@loader/Loader';
import { checkExistUser, loginUser, registerUser, setNullExistUser, setStatus } from '../store/userSlice';

export default function Login() {

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.user.error)
    const isAuth = useSelector(state => state.user.isAuth);
    const navigate = useNavigate();

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
        },
    });


    const theme = useTheme();

    if(isAuth) {
        navigate('/product');
    }

    return (
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }} onSubmit={formik.handleSubmit}>
            <Box>
                <TextField
                    sx={{ mb: '30px' }}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ mb: '30px' }}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                {errorMessage && <Box textAlign='center' sx={{color: `${theme.palette.error.dark}`}}>{errorMessage}</Box>}
                <Button sx={{ '&:hover': { background: `${theme.palette.secondary.light}` } }} color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
                <Typography my='50px' textAlign='center'>Haven`t account - <Link to='/registration' style={{color: '#0384fc', textDecoration: 'none'}}>Register</Link></Typography>
            </Box>
        </form>
    );
};
