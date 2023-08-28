import { Typography, TextField, CardMedia  } from '@mui/material';

export default function Landing() {
    return (
        <CardMedia 
            image='https://picsum.photos/1100/350'
            sx={{ position: 'relative', px: '2rem', pb: '10rem', bgcolor: 'grey.300', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px'}}

        >

            <Typography variant='h3' component='h1' textAlign='center' sx={{ mt: 10 }}>
                Travel new places and share with your friends
            </Typography>

            <TextField placeholder='Enter a destination' fullWidth sx={{ maxWidth: '40rem', mt: 8 }} />
        </CardMedia>
    )
}
