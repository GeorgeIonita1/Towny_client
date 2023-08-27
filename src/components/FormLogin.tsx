import { Paper, Box, Typography, TextField, Button, Grid } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FormLogin() {
    const continueWithEmail = false;

    return (
        <Box sx={{ maxWidth: 600, m: '0 auto' }}>
            <Paper elevation={6} sx={{ p: 2 }}>
                <Typography variant='h4' component='h1'>Welcome</Typography>
                <Typography variant='h6' component='h2'>Sign in or create account</Typography>

                <Box sx={[
                    continueWithEmail && { display: 'none' }
                ]}>
                    <Box component='form' sx={{ mt: 4 }}>
                        <TextField label="email" variant="outlined" required sx={{ mb: 2 }} fullWidth />
                        <Button variant='contained' sx={{ display: 'block', py: '1rem' }} fullWidth>Continue</Button>
                    </Box>

                    <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 4 }}>or sign in with</Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant='outlined' fullWidth startIcon={<GoogleIcon />} sx={{ py: 1.5 }}>Google</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant='outlined' fullWidth startIcon={<FacebookIcon />} sx={{ py: 1.5 }}>Facebook</Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* create account with email */}
                <Box sx={[
                    !continueWithEmail && { display: 'none' }
                ]}>
                    <Box component='form' sx={{ mt: 4 }}>
                        <TextField label="password" type='password' variant="outlined" required sx={{ display: 'block', mb: 2 }} fullWidth />
                        <TextField label="confirm password" type='password' variant="outlined" required sx={{ display: 'block', mb: 2 }} fullWidth />
                        <Button variant='contained' sx={{ display: 'block', py: '1rem' }} fullWidth>Create account</Button>
                    </Box>
                </Box>
                    <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 4 }}>By creating an account, you agree to our Terms of Service and Privacy Statement.</Typography>
            </Paper>
        </Box>
    )
}
