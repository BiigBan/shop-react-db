import { useTheme } from '@emotion/react'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Category() {

    const [open, setOpen] = useState(false)
    const [openSecondElectronics, setOpenSecondElectronics] = useState(false);
    const [openSecondComputer, setOpenSecondComputer] = useState(false);
    const [openSecondClothes, setOpenSecondClothes] = useState(false);
    const [openSecondJewelery, setOpenSecondJewelery] = useState(false);
    const grid = useSelector(state => state.global.grid)
    const theme = useTheme()
    const navigate = useNavigate();

    const selectCategory = (event) => {
        let text = event.target.innerHTML.toLowerCase();
        if (text === 'men\'s clothing') {
            text = 'man\'s clothing'
        }
        navigate(`${text}/${grid}`)
    }


    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: { md: '335px', xs: '100%' } }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{ mb: '40px', p: '0', position: 'inherit' }} component="div" id="nested-list-subheader">
                    <Box sx={{
                        height: '56px',
                        border: `1px solid ${theme.palette.secondary.main}`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        px: '30px',
                        justifyContent: { md: 'flex-start', xs: 'center' }
                    }}>
                        <FilterListIcon sx={{ mr: '45px' }} color='secondary' />
                        <Typography fontSize='24px' fontFamily='Quicksand' fontWeight='700' color='secondary'>Departments</Typography>
                    </Box>
                </ListSubheader>
            }
        >
            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}`, background: `${theme.palette.secondary.light}`, color: `${theme.palette.secondary.main}` } }} onClick={handleClick}>
                <ListItemIcon>
                    {open ? <Box sx={{ transform: 'rotate(90deg)' }}><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box> : <Box><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box>}
                </ListItemIcon>
                <Box>
                    <ListItemText sx={{ lineHeight: '1rem' }} primary="All Categories" />
                    <ListItemText sx={{ lineHeight: '1rem' }} secondary="Ecommerce patterns" />
                </Box>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton onClick={() => setOpenSecondElectronics(!openSecondElectronics)} sx={{ pl: 4, '&:hover': { backgroundColor: `${theme.palette.secondary.light}` } }}>
                        <ListItemIcon>
                            {openSecondElectronics ? <Box sx={{ transform: 'rotate(90deg)' }}><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box> : <Box><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box>}
                        </ListItemIcon>
                        <ListItemText sx={{ fontWeight: '700' }} primary="Electronics" />
                    </ListItemButton>
                    <Collapse in={openSecondElectronics} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Phones" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Applications" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Smart Watches" />
                                </Box>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => setOpenSecondComputer(!openSecondComputer)} sx={{ pl: 4, '&:hover': { backgroundColor: `${theme.palette.secondary.light}` } }}>
                        <ListItemIcon>
                            {openSecondComputer ? <Box sx={{ transform: 'rotate(90deg)' }}><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box> : <Box><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box>}
                        </ListItemIcon>
                        <Box>
                            <ListItemText sx={{ fontWeight: '700', lineHeight: '1rem' }} primary="Computers" />
                            <ListItemText sx={{ fontWeight: '700', lineHeight: '1rem' }} secondary="Tablets & Networking" />
                        </Box>
                    </ListItemButton>
                    <Collapse in={openSecondComputer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box >
                                    <ListItemText onClick={selectCategory} primary="Laptops" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Computers" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Tablets" />
                                </Box>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => setOpenSecondClothes(!openSecondClothes)} sx={{ pl: 4, '&:hover': { backgroundColor: `${theme.palette.secondary.light}` } }}>
                        <ListItemIcon>
                            {openSecondClothes ? <Box sx={{ transform: 'rotate(90deg)' }}><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box> : <Box><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box>}
                        </ListItemIcon>
                        <Box>
                            <ListItemText sx={{ fontWeight: '700', lineHeight: '1rem' }} primary="Clothes" />
                        </Box>
                    </ListItemButton>
                    <Collapse in={openSecondClothes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box >
                                    <ListItemText onClick={selectCategory} primary="Women's clothing" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Men's clothing" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Baby's clothing" />
                                </Box>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => setOpenSecondJewelery(!openSecondJewelery)} sx={{ pl: 4, '&:hover': { backgroundColor: `${theme.palette.secondary.light}` } }}>
                        <ListItemIcon>
                            {openSecondJewelery ? <Box sx={{ transform: 'rotate(90deg)' }}><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box> : <Box><ArrowForwardIosIcon sx={{ width: '15px' }} color='secondary' /></Box>}
                        </ListItemIcon>
                        <Box>
                            <ListItemText sx={{ fontWeight: '700', lineHeight: '1rem' }} primary="Jewelery" />
                        </Box>
                    </ListItemButton>
                    <Collapse in={openSecondJewelery} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box >
                                    <ListItemText onClick={selectCategory} primary="Beads" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Earrings" />
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={{ '&:hover': { backgroundColor: `${theme.palette.secondary.light}` }, justifyContent: 'center' }}>
                                <Box>
                                    <ListItemText onClick={selectCategory} primary="Rings" />
                                </Box>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Collapse >
        </List >
    )
}
