import { Paper, Box, Typography, TextField, Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import useLoginUser from '../hooks/useLoginUser';
import { IFormLoginProps } from '../interfaces/interfaces';

export default function FormLogin({ isLogin }: IFormLoginProps) {
    const { formError, handleUserInput, handleFormSubmit, handleFormErrorStateReset } = useLoginUser(isLogin);

    return (
        <Box 
            sx={{ maxWidth: 600, m: '3rem auto 0' }}
        >
            <Paper 
                elevation={6}
                sx={{ p: 2 }}
            >
                <Typography variant='h4' component='h1'>Welcome</Typography>
                <Typography variant='h6' component='h2'>Sign in or create account</Typography>

                <Box 
                    component='form'
                    onSubmit={handleFormSubmit}
                    sx={{ mt: 4, '& small': { color: 'red' } }}
                >
                    <TextField name='email' label="email" variant="outlined" 
                        required
                        onChange={handleUserInput}
                        error={!!formError.email}
                        key={isLogin ? 1 : 2} // reset state between login/register
                    />
                    <Typography component='small'>{formError.email}</Typography>

                    <TextField name='password' label="password" type='password' variant="outlined" 
                        required
                        onChange={handleUserInput}
                        error={!!formError.password}
                        key={isLogin ? 3 : 4}
                    />
                    <Typography component='small'>{formError.password}</Typography>

                    { !isLogin && 
                        <>
                            <TextField name='confirmPassword' label="confirm password" type='password' variant="outlined" 
                                error={!!formError.confirmPassword}
                                required fullWidth 
                                onChange={handleUserInput}
                            /> 
                            <Typography component='small'>{formError.confirmPassword}</Typography>
                        </>
                    }


                    <Button variant='contained' type='submit'
                        sx={{ py: '1rem', mt: 2, width: 1 }} 
                    >
                        { isLogin ? 'Log in' : 'Register' }
                    </Button>
                </Box>
                
                { isLogin && (
                    <Box sx={{ '& .MuiButtonBase-root': { width: '100%', py: 2, mt: 2, cursor: 'not-allowed' }}}>
                        <Typography 
                            variant='subtitle1' component='small' align='center'
                            sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                                '&::after, &::before': { content: '""', bgcolor: 'gray', height: '1px', width: '20%', display: 'block' } 
                            }}
                        >
                            or sign in with
                        </Typography>

                        <Button disabled variant='outlined' startIcon={<GoogleIcon />}>Google</Button>
                        <Button disabled variant='outlined' startIcon={<FacebookIcon />}>Facebook</Button>
                    </Box>
                )}

                <Typography 
                    variant='subtitle1' component='h3' align='center' 
                    sx={{ mt: 4 }}
                >By creating an account, you agree to our Terms of Service and <br />Privacy Statement.</Typography>
                
                <Box 
                    sx={{ position: 'relative', mt: 2, pt: 2, display: 'flex', justifyContent: 'center',
                        '&::before': { content: '""', position: 'absolute', height: '1px', width: '70%', bgcolor: 'gray', top: '0' }
                    }}
                >
                    { isLogin ? (
                        <Typography>Don't have an account? <Link href='/register' onClick={handleFormErrorStateReset}>Register</Link></Typography>
                    ) : (
                        <Typography>Already have an account? <Link href='/login' onClick={handleFormErrorStateReset}>Login</Link></Typography>
                    )}
                </Box>
            </Paper>
        </Box>
    )
}
