import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from './../../assets/logo.svg'
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import style from './Header.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logoutUser, setAuth, setUser } from '../../store/userSlice';

const pages = ['Sign in', 'My cart'];
const settings = ['Profile', 'Settings', 'Logout'];

const Header = () => {



    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [search, setSearch] = React.useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const selectSetting = (e) => {
        if (e.target.innerHTML === 'Logout') {
            dispatch(logoutUser())
            dispatch(setAuth())
            localStorage.setItem('shopEmail', '')
        }
    }

    const userInfo = useSelector(state => state.user.user);
    const isAuth = useSelector(state => state.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuth) {
            const email = localStorage.getItem('shopEmail');
            if (email) {
                dispatch(setUser(email))
            }
        }
    }, [])

    return (
        <AppBar sx={{ boxShadow: 'none' }} position="static">
            <Toolbar disableGutters>
                {/*on Phone */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/product'>
                        <IconButton sx={{ borderRadius: '10px' }}>
                            <Box sx={{ maxWidth: '176px' }}>
                                <img style={{ maxWidth: '100%' }} src={logo} alt='logo of web site' />
                            </Box>
                        </IconButton>
                    </Link>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography color={theme.palette.primary.contrastText} textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                {/*on Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    <Box sx={{ width: '176px', flexGrow: 1, display: 'flex' }}>
                        <Link to='/product'>
                            <IconButton sx={{ borderRadius: '10px' }}>
                                <img style={{ width: '176px' }} src={logo} alt='logo of web site' />
                            </IconButton>
                        </Link>
                        <Box sx={{ ml: '50px', display: 'flex', alignSelf: 'center', alignItems: 'center', background: '#e3e3e3', height: '48px', borderRadius: '99px', px: '15px', maxWidth: '600px' }}>
                            <SearchIcon sx={{ fill: `${theme.palette.primary.contrastText}` }} />
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className={style.input} type="text" />
                            <IconButton onClick={() => setSearch('')}>
                                <ClearIcon sx={{ fill: `${theme.palette.secondary.dark}` }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', }}>
                        {!isAuth && <>
                            <Link to='login' style={{ textDecoration: 'none' }} >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    color='secondary'
                                    sx={{ my: 2, display: 'block', mr: '21px', fontFamily: 'Quicksand', '&:hover': { background: `${theme.palette.secondary.light}` } }}
                                    variant='outlined'
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Button
                                onClick={handleCloseNavMenu}
                                color='primary'
                                sx={{ fontFamily: 'Quicksand', my: 2, mr: '21px', display: 'block', color: `${theme.palette.secondary.main}`, boxShadow: `1px 2px 3px ${theme.palette.secondary.main}`, '&:hover': { background: `${theme.palette.secondary.light}` } }}
                                variant='contained'
                            >
                                My Cart
                            </Button>
                        </>
                        }
                    </Box>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={userInfo.username} src={userInfo.image} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography onClick={selectSetting} textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;

