import { Box, Grid, Rating } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

export default function Item({ image, title, description, price, rating }) {
    const theme = useTheme();
    return (
        <Grid item xs={12} lg={4} xl={3} md={6}>
            <Card sx={{transition: '0.3s',boxShadow: 'none', '&:hover': {boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}, maxWidth: 'auto', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '5px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                    sx={{ objectFit: 'contain' }}
                />
                <CardContent sx={{display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                <Typography variant="span" color='secondary' sx={{ mb: '10px' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{flex: '1 1 auto', maxHeight: '350px', overflow: 'auto', '&::-webkit-scrollbar-thumb': { width: '4px', background: `${theme.palette.primary.dark}`, borderRadius: '3px' }, '&::-webkit-scrollbar': { width: '4px', background: `${theme.palette.primary.light}` } }}>
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="span">
                        {price}$
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{ width: '100px', display: 'flex', alignItems: 'center' }}>
                        <Rating size='small' sx={{mr: '10px'}} name="read-only" value={rating.rate} readOnly />
                        <Typography variant='span' component='span'>{rating.rate}</Typography>
                    </Box>
                    <Button variant='outlined' color='secondary' size="small">
                        <Box fontSize='14px' sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <FavoriteBorderIcon/>
                        Watch
                        </Box>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
