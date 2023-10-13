// todo: integrate formik
// maybe add some <sections> for future places

import { Paper, Box, Typography, TextField, Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';

export default function FormLogin({ isLogin }: FormLoginProps) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateForm = () => {
        const errors = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword && !isLogin) {
            errors.confirmPassword = 'Password must match';
        }

        setFormError(errors);
        return Object.values(errors).every(error => error === '');
    }

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("george", formData)
        
        if (!validateForm()) {
            console.log("smth is briken");
            return;
        }

        console.log('all good', formData)

        fetch('http://localhost:6677/users/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <Box sx={{ maxWidth: 600, m: '0 auto' }}>
            <Paper elevation={6} sx={{ p: 2 }}>
                <Typography variant='h4' component='h1'>Welcome</Typography>
                <Typography variant='h6' component='h2'>Sign in or create account</Typography>

                <Box 
                    component='form' sx={{ mt: 4, '& > *': { width: 1 }, '& .MuiTextField-root': { mt: 3 }, '& small': { color: 'red' } }}
                    onSubmit={handleFormSubmit}
                >
                    <TextField name='email' label="email" variant="outlined" required
                        onChange={handleUserInput}
                        error={!!formError.email}
                    />
                    <Typography component='small'>{formError.email}</Typography>

                    <TextField name='password' label="password" type='password' variant="outlined" 
                        required
                        onChange={handleUserInput}
                        error={!!formError.password}
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

                    { isLogin ? <Link href='/register'>Register</Link> : <Link href='/login'>Login</Link> }

                    <Button variant='contained' sx={{ py: '1rem' }} type='submit'>Continue</Button>
                </Box>
                
                {isLogin && (
                    <div>
                        <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 1}}>or sign in with</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 6, '& .MuiButton-root': { py: 1.5, flexGrow: 1 }, mt: 1 }}>
                                <Button variant='outlined' startIcon={<GoogleIcon />}>Google</Button>
                                <Button variant='outlined' startIcon={<FacebookIcon />}>Facebook</Button>
                        </Box>
                    </div>)
                }
                    <Typography variant='subtitle1' component='h3' align='center' sx={{ mt: 4 }}>By creating an account, you agree to our Terms of Service and Privacy Statement.</Typography>
            </Paper>
        </Box>
    )
}
