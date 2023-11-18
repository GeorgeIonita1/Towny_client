import { Paper, Box, Typography, TextField, Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import useLoginUser from '../hooks/useLoginUser';
import { IFormLoginProps } from '../interfaces/interfaces';

export default function FormLogin({ isLogin }: IFormLoginProps) {
    const { formError, handleUserInput, handleFormSubmit } = useLoginUser(isLogin);

    return (
        <Box sx={{ maxWidth: 600, m: '3rem auto 0' }}>
            <Paper elevation={6} sx={{ p: 2 }}>
                <Typography variant='h4' component='h1'>Welcome</Typography>
                <Typography variant='h6' component='h2'>Sign in or create account</Typography>

                <Box 
                    component='form' sx={{ mt: 4, '& > *': { width: 1 }, '& .MuiTextField-root, & .MuiButtonBase-root': { mt: 3 }, '& small': { color: 'red' } }}
                    onSubmit={handleFormSubmit}
                >
                    <TextField name='email' label="email" variant="outlined" required
                        onChange={handleUserInput}
                        error={!!formError.email}
                        key={isLogin ? 1 : 2}
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
                                required fullWidth sx={{ display: 'block' }} 
                                onChange={handleUserInput}
                                error={!!formError.confirmPassword}
                                /> 
                            <Typography component='small'>{formError.confirmPassword}</Typography>
                        </>
                    }


                    <Button variant='contained' sx={{ py: '1rem' }} type='submit'>Log in</Button>
                </Box>
                
                { isLogin && (
                    <>
                        <Typography 
                            variant='subtitle1' component='small' align='center'
                            sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, '&::after, &::before': { content: '""', bgcolor: 'gray', height: '1px', width: '20%', display: 'block' } }}
                        >
                            or sign in with
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 6, mt: 2, '& .MuiButton-root': { py: 1.5, flexGrow: 1 } }}>
                                <Button variant='outlined' startIcon={<GoogleIcon />}>Google</Button>
                                <Button variant='outlined' startIcon={<FacebookIcon />}>Facebook</Button>
                        </Box>
                    </>
                )}

                <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 4 }}>By creating an account, you agree to our Terms of Service and <br />Privacy Statement.</Typography>
                
                <Box sx={{ position: 'relative', mt: 2, pt: 2, display: 'flex', justifyContent: 'center',
                    '&::before': { content: '""', position: 'absolute', height: '1px', width: '70%', bgcolor: 'gray', top: '0' } }}
                >
                    { isLogin ? (
                        <Typography>Don't have an account? <Link href='/register'>Register</Link></Typography>
                    ) : (
                        <Typography>Already have an account? <Link href='/login'>Login</Link></Typography>
                    )}
                </Box>
            </Paper>
        </Box>
    )
}
