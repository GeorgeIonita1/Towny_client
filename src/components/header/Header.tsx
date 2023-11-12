import { Box, Button, Container, Typography, Link, Stack } from "@mui/material";
import SavingsIcon from '@mui/icons-material/Savings';

export default function Header() {
    return (
        <Box component='header' sx={{ backgroundColor: 'black' }}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 3}}>
                    <Typography 
                        component='a'
                        sx={{ fontSize: 20, fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'none' }} 
                        href="http://google.com" 
                        target="_blank"
                    >
                        <SavingsIcon fontSize="large" />
                        Towny
                    </Typography>

                    <Box component='nav' sx={{ ml: 6, mr: 'auto' }}>
                        <Stack component='ul' direction='row' spacing={3} padding={0}>
                            <li><Link href='/landing'>Landing</Link></li>
                            <li><Link href='/login'>Login</Link></li>
                            <li><Link href='/'>Home</Link></li>
                        </Stack>
                    </Box>

                    <Button variant='outlined' href="/login">Login / Register</Button>
                </Box>
            </Container>
        </Box>
    )
}
