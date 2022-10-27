import { useTheme } from '@emotion/react';
import { Error } from '@mui/icons-material';
import { Button, Radio, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { ErrorMessage, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Loader from '../components/@loader/Loader';
import { checkExistUser, registerUser, setNullExistUser, setStatus } from '../store/userSlice';

export default function Registration() {
    const [sex, setSex] = useState('Male');
    const [created, setCreated] = useState(false);
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [userValues, setUserValues] = useState({});
    const dispatch = useDispatch();

    console.log(user);

    const userStatus = useSelector(state => state.user.status)
    const existUser = useSelector(state => state.user.existUser)
    const navigate = useNavigate();

    const validationSchema = yup.object({
        username: yup
            .string('Enter your name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        image: yup
            .string('Enter your Image')
            .required('Image is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            sex: 'Male',
            image: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await dispatch(checkExistUser(values.email));
            setEmail(values.email)
            setUserValues(values)
            setUser('')
            if (existUser) {
                dispatch(setNullExistUser())
            }
        },
    });

    useEffect(() => {
        if (userValues !== {}) {
            if (!existUser) {
                setCreated(true);
                let res = { ...userValues, selectedGoods: [] }
                dispatch(registerUser(res))
                dispatch(setStatus('resolved'))
                if (created && email.length > 0) {
                    localStorage.setItem('shopEmail', email);
                    navigate('/product')
                }
            } else {
                setUser('User is exist. Please - write another email')
                formik.values.email = '';
            }
        }
    }, [userValues])

    const theme = useTheme();


    return (
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }} onSubmit={formik.handleSubmit}>
            <Box>
                <TextField
                    sx={{ mb: '30px' }}
                    fullWidth
                    id="name"
                    name="username"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
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
                <TextField
                    sx={{ mb: '30px' }}
                    fullWidth
                    id="image"
                    name="image"
                    label="Image"
                    type="text"
                    placeholder='Please - write an URL'
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    helperText={formik.touched.image && formik.errors.image}
                />
                <Box display='flex' justifyContent='space-around' sx={{ mb: '10px' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Radio
                            sx={{ '&.Mui-checked': { color: `${theme.palette.secondary.main}` } }}
                            id="male"
                            type="radio"
                            value="male"
                            name="male"
                            checked={sex === 'Male'}
                            onChange={() => setSex('Male')}
                        />
                        <Typography>Male</Typography>
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Radio
                            sx={{ '&.Mui-checked': { color: `${theme.palette.secondary.main}` } }}
                            id="female"
                            type="radio"
                            value="male"
                            name="male"
                            checked={sex === 'Female'}
                            onChange={() => setSex('Female')}
                        />
                        <Typography>Female</Typography>
                    </label>
                </Box>
                {user.length > 0 ? <Typography textAlign='center' sx={{ color: `${theme.palette.error.dark}` }}>
                    {user}
                </Typography> : null}
                <Button sx={{ '&:hover': { background: `${theme.palette.secondary.light}` } }} color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    );
};
