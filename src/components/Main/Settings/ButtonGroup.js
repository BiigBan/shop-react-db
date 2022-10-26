import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('Show all');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const theme = useTheme();
    return (
        <ToggleButtonGroup
            // color='secondary'
            sx={{color: `${theme.palette.secondary.main}`,backgroundColor: `${theme.palette.primary.main}`, borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)'}}
            value={alignment}
            
            exclusive
            onChange={handleChange}
            aria-label="outlined primary button group"
        >
            <ToggleButton sx={{'&.Mui-selected, &.Mui-selected:hover':{background: `${theme.palette.primary.main}`,borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)' ,color: `${theme.palette.secondary.main}`},fontSize: '14px',background: `${theme.palette.secondary.light}`,transition: '0.3s', '&:hover': {background: `${theme.palette.secondary.main}`}}} value="Show all">Show all</ToggleButton>
            <ToggleButton sx={{'&.Mui-selected, &.Mui-selected:hover':{background: `${theme.palette.primary.main}`,borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)' ,color: `${theme.palette.secondary.main}`},fontSize: '14px', background: `${theme.palette.secondary.light}`,transition: '0.3s', '&:hover': {background: `${theme.palette.secondary.main}`}}} value="Auction">Auction</ToggleButton>
            <ToggleButton sx={{'&.Mui-selected, &.Mui-selected:hover':{background: `${theme.palette.primary.main}`,borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)' ,color: `${theme.palette.secondary.main}`},fontSize: '14px', background: `${theme.palette.secondary.light}`,transition: '0.3s', '&:hover': {background: `${theme.palette.secondary.main}`}}} value="Buy now">Buy now</ToggleButton>
        </ToggleButtonGroup>
    );
}