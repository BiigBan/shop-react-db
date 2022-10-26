import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setGrid } from '../../store/globalSlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function AlreadyButtonGroup({ title, values }) {
    const {grid} = useParams()
    const [alignment, setAlignment] = React.useState(grid || `${values[1]}`);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (alignment === 'row' || alignment === 'grid') {
            if (!window.location.pathname.split('/').includes('grid') && !window.location.pathname.split('/').includes('row')) {
                navigate(`${window.location.pathname}/${alignment}`)
            }
            else {
                let url = window.location.pathname.split('/');
                url.pop();
                let cache = url.push(alignment)
                let res = url.join('/')
                navigate(`${res}`)
            }
            dispatch(setGrid({ alignment }))
        }
    }, [alignment])



    const theme = useTheme();
    return (
        <ToggleButtonGroup
            sx={{ color: `${theme.palette.secondary.main}`, backgroundColor: `${theme.palette.primary.main}`, borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)' }}
            value={alignment}

            exclusive
            aria-label="outlined primary button group"
        >
            {typeof title[0] === 'string' ? Array.from(title).map((comp, index) => {
                return <ToggleButton key={index} onClick={() => setAlignment(comp)} sx={{ '&.Mui-selected, &.Mui-selected:hover': { background: `${theme.palette.primary.main}`, borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)', color: `${theme.palette.secondary.main}` }, fontSize: '14px', background: `${theme.palette.secondary.light}`, transition: '0.3s', '&:hover': { background: `${theme.palette.secondary.main}` } }} value={comp}>{comp}</ToggleButton>
            }) : Array.from(title).map((comp, index) => {
                const Component = comp;
                return <ToggleButton key={index} onClick={() => setAlignment(values[index])} sx={{ '&.Mui-selected, &.Mui-selected:hover': { background: `${theme.palette.primary.main}`, borderRadius: '4px', boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)', color: `${theme.palette.secondary.main}` }, fontSize: '14px', background: `${theme.palette.secondary.light}`, transition: '0.3s', '&:hover': { background: `${theme.palette.secondary.main}` } }} value={values[index]}><Component /></ToggleButton>
            })}
        </ToggleButtonGroup>
    );
}