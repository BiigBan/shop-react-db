import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { useTheme } from '@mui/system';
import { useFormik } from 'formik';

export default function ProfileSettings() {
    // const dispatch = useDispatch();
    // const errorMessage = useSelector(state => state.user.error)
    // const isAuth = useSelector(state => state.user.isAuth);
    // const navigate = useNavigate();

    const validationSchema = yup.object({
        username: yup
            .string('Enter your name')
            .required('Name is required'),
        image: yup
            .string('Enter image url')
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
            ),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // dispatch(loginUser(values))
        },
    });


    const theme = useTheme();

    return (
        <>
            <Typography textAlign='center' fontSize='36px'>Change <Typography sx={{ color: `${theme.palette.secondary.dark}` }}>user</Typography> information</Typography>
            <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }} onSubmit={formik.handleSubmit}>
                <Box>
                    <TextField
                        sx={{ mb: '30px' }}
                        fullWidth
                        id="username"
                        name="username"
                        label="Name"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={{ mb: '30px' }}
                        fullWidth
                        id="image"
                        name="image"
                        label="Image"
                        placeholder='Please write url link'
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
                    {/* {errorMessage && <Box textAlign='center' sx={{ color: `${theme.palette.error.dark}` }}>{errorMessage}</Box>} */}
                    <Button  sx={{ '&:hover': { background: `${theme.palette.secondary.light}` } }} color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </>
    )
}
