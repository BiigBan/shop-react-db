import { Box } from '@mui/system'
import React from 'react'
import {ReactComponent as Clothes} from './../../assets/Category/clothes.svg'
import {ReactComponent as Electrical} from './../../assets/Category/electrical.svg'
import {ReactComponent as Entertainment} from './../../assets/Category/entertainment.svg'
import {ReactComponent as Growing} from './../../assets/Category/growing.svg'
import {ReactComponent as Kitchen} from './../../assets/Category/kitchen.svg'
import {ReactComponent as Mother} from './../../assets/Category/mother.svg'
import {ReactComponent as Music} from './../../assets/Category/music.svg'
import {ReactComponent as Pets} from './../../assets/Category/pets.svg'
import {ReactComponent as Sport} from './../../assets/Category/sport.svg'
import {ReactComponent as Toys} from './../../assets/Category/toys.svg'
import {ReactComponent as Travel} from './../../assets/Category/travel.svg'
import {ReactComponent as Vintage} from './../../assets/Category/vintage.svg'
import Accordio from './Accordion/Accordion'
import Item from './Item/Item'


const category = [{ name: 'Clothing & Shoes', img: Clothes }, { name: 'Entertainment', img: Entertainment }, { name: 'Music', img: Music }, { name: 'Sport & Lifestyle', img: Sport }, { name: 'Pets', img: Pets }, { name: 'Kitchen Accessories', img: Kitchen }, { name: 'Travel Equipment', img: Travel }, { name: 'Growing & Garden', img: Growing }, { name: 'Electrical Tools', img: Electrical }, { name: 'Mother Care', img: Mother }, { name: 'Toys & Entertainment', img: Toys }, { name: 'Vintage', img: Vintage }]

export default function Category() {

    return (
        <>
            <Box sx={{ display: { sm: 'flex', xs: 'none' }, justifyContent: 'space-between', flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
                {
                    category.map(component => {
                        return <Item {...component} />
                    })}
            </Box>
            <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
                <Accordio>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
                        {
                            category.map(component => {
                                return <Item {...component} />
                            })}
                    </Box>
                </Accordio>
            </Box>
        </>
    )
}
