import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import Accordio from '../../Category/Accordion/Accordion'

export default function Filter() {
    return (
        <>
            <Accordio title='Filter'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color='secondary' />} label="Most Rated" />
                    <FormControlLabel control={<Checkbox color='secondary' />} label="Price: Low → High" />
                    <FormControlLabel control={<Checkbox color='secondary' />} label="Price: High → Low" />
                </FormGroup>
            </Accordio>
        </>
    )
}
