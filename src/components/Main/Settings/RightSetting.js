import React from 'react'
import AlreadyButtonGroup from '../../@alreadyComponent/ButtonGroup'
import ButtonGroupComponent from './ButtonGroup'
import { ReactComponent as row } from './../../../assets/Settings/row.svg'
import { ReactComponent as grid } from './../../../assets/Settings/grid.svg'
import { Box } from '@mui/material'

export default function RightSetting() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Box sx={{mr: '24px', }}> */}
                {/* <AlreadyButtonGroup title={['Show all', 'Auction', 'Buy now']} /> */}
            {/* </Box> */}
            <Box>
                <AlreadyButtonGroup title={[row, grid]} values={['row', 'grid']} />
            </Box>
        </Box>
    )
}
