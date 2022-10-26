import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { highLow, lowHigh, mostRated } from '../../../store/productSlice';
import Accordio from '../../Category/Accordion/Accordion'

export default function Filter() {
    const [handleCheck1, setHandleCheck1] = useState(false);
    const [handleCheck2, setHandleCheck2] = useState(false);
    const [handleCheck3, setHandleCheck3] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(handleCheck1) {
            dispatch(mostRated())
        } else if (handleCheck2) {
            dispatch(lowHigh());
        } else if (handleCheck3) {
            dispatch(highLow())
        }
    }, [handleCheck1, handleCheck2, handleCheck3])
    return (
        <>
            <Accordio title='Filter'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={(e) => setHandleCheck1(e.target.checked)} checked={handleCheck1} disabled={handleCheck2 || handleCheck3} color='secondary' />} label="Most Rated" />
                    <FormControlLabel control={<Checkbox onChange={(e) => setHandleCheck2(e.target.checked)} checked={handleCheck2} disabled={handleCheck3 || handleCheck1} color='secondary' />} label="Price: Low → High" />
                    <FormControlLabel control={<Checkbox onChange={(e) => setHandleCheck3(e.target.checked)} checked={handleCheck3} disabled={handleCheck2 || handleCheck1} color='secondary' />} label="Price: High → Low" />
                </FormGroup>
            </Accordio>
        </>
    )
}
