import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import MainMenu from '../components/main-menu/MainMenu';

export default function Home() {
    return (
        <Box component='main'>
            <Container>
                <Box display='flex' gap='1rem'>
                    <MainMenu />
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
}
