import { Box, Button, Container, Typography, Link } from "@mui/material";
import SavingsIcon from '@mui/icons-material/Savings';

export default function Header() {
    return (
        <Box component='header' sx={{ backgroundColor: 'black' }}>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 3}}>
                    <Typography 
                        component='a'
                        sx={{ fontSize: 20, fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'none' }} 
                        href="http://google.com" 
                        target="_blank"
                    >
                        <SavingsIcon fontSize="large" />
                        Towny
                    </Typography>
                    <Link href='/landing'>Landing</Link>
                    <Button variant='outlined' href="/login">Sign in</Button>
                </Box>
            </Container>
        </Box>
    )
}
