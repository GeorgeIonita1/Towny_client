// todo: integrate formik
// maybe add some <sections> for future places

import { Paper, Box, Typography, TextField, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';

export default function FormLogin() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <Box sx={{ maxWidth: 600, m: '0 auto' }}>
            <Paper elevation={6} sx={{ p: 2 }}>
                <Typography variant='h4' component='h1'>Welcome</Typography>
                <Typography variant='h6' component='h2'>Sign in or create account</Typography>

                <Box component='form' sx={{ mt: 4, '& > *': { width: 1 } }}>
                    <TextField label="email" variant="outlined" required sx={{ mb: 2 }} />
                    <TextField label="password" type='password' variant="outlined" required sx={{ mb: 1 }} />
                    { isRegister && <TextField label="confirm password" type='password' variant="outlined" required sx={{ display: 'block', mb: 2 }} fullWidth /> }

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                        <Typography>Forgot password?</Typography>
                        { !isRegister && <Typography onClick={() => setIsRegister(true)}>Register</Typography>}
                    </Box>
                    <Button variant='contained' sx={{ py: '1rem' }}>Continue</Button>
                </Box>

                <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 1}}>or sign in with</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 6, '& .MuiButton-root': { py: 1.5, flexGrow: 1 }, mt: 1 }}>
                        <Button variant='outlined' startIcon={<GoogleIcon />}>Google</Button>
                        <Button variant='outlined' startIcon={<FacebookIcon />}>Facebook</Button>
                </Box>
                    <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 4 }}>By creating an account, you agree to our Terms of Service and Privacy Statement.</Typography>
            </Paper>
        </Box>
    )
}
