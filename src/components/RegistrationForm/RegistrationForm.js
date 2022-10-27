import React from 'react'
import Loader from '../@loader/Loader';
import { Button, Radio, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function RegistrationForm({formik, theme,sex,setSex,user}) {
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
    )
}
