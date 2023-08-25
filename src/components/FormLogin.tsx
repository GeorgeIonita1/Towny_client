import { Paper, Box, Typography, TextField, Button } from '@mui/material'

export default function FormLogin() {
    return (
        <Box sx={{ maxWidth: 600, m: '0 auto' }}>
            <Paper elevation={4} sx={{ p: 2 }}>
                <Typography variant='h4' component='h1'>Welcome</Typography>

                <Box component='form' sx={{ mt: 4 }}>
                    <TextField label="email" variant="outlined" required sx={{ display: 'block', mb: 2 }} fullWidth />
                    <Button variant='contained' sx={{ display: 'block', py: '1rem' }} fullWidth>Continue</Button>
                </Box>
            </Paper>
        </Box>
    )
}
