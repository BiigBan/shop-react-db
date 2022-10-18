import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
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
import { Link } from 'react-router-dom';

const pages = ['Sign in', 'My cart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
                    <IconButton sx={{ borderRadius: '10px' }}>
                        <Box sx={{ maxWidth: '176px' }}>
                            <img style={{ maxWidth: '100%' }} src={logo} alt='logo of web site' />
                        </Box>
                    </IconButton>
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
                        <IconButton sx={{ borderRadius: '10px' }}>
                            <img style={{ width: '176px' }} src={logo} alt='logo of web site' />
                        </IconButton>
                        <Box sx={{ ml: '50px', display: 'flex', alignSelf: 'center', alignItems: 'center', background: '#e3e3e3', height: '48px', borderRadius: '99px', px: '15px', maxWidth: '600px' }}>
                            <SearchIcon sx={{ fill: `${theme.palette.primary.contrastText}` }} />
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className={style.input} type="text" />
                            <IconButton onClick={() => setSearch('')}>
                                <ClearIcon sx={{ fill: `${theme.palette.secondary.dark}` }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            color='secondary'
                            sx={{ my: 2, display: 'block', mr: '21px', fontFamily: 'Quicksand' }}
                            variant='outlined'
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            color='primary'
                            sx={{ fontFamily: 'Quicksand', my: 2, mr: '21px', display: 'block', color: `${theme.palette.secondary.main}`, boxShadow: `1px 2px 3px ${theme.palette.secondary.main}` }}
                            variant='contained'
                        >
                            My Cart
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;

