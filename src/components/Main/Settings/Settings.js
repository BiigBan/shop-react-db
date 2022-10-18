import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Settings() {
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Box display='flex'>
            <Box  sx={{ minWidth: 120 }}>
                <FormControl size='small' fullWidth>
                    <InputLabel id="demo-simple-select-label">SORT BY</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="SORT BY"
                        onChange={handleChange}
                    >
                        <MenuItem value='Alphabet'>Alphabet</MenuItem>
                        <MenuItem value='Reverse alphabet'>Reverse alphabet</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}
