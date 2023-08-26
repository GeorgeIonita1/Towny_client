// todo: change default props for styled custom component

import { Box, Button, Container, Typography, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import SavingsIcon from '@mui/icons-material/Savings';

export default function Header() {
    const NavigaionItem = styled(Link)(({ theme }) => ({
        color: theme.palette.success.main,
        fontWeight: "bold",
        cursor: 'pointer'
      }));

    return (
        <Box sx={{ backgroundColor: 'black' }}>
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

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 4, mr: 'auto' }}>
                        <NavigaionItem underline="hover">Dashboard</NavigaionItem>
                        <NavigaionItem underline="hover">Stays</NavigaionItem>
                        <NavigaionItem underline="hover">Flights</NavigaionItem>
                        <NavigaionItem underline="hover">Rentals</NavigaionItem>
                    </Box>

                    <Button variant="outlined">Login / Register</Button>
                </Box>
            </Container>
        </Box>
    )
}
