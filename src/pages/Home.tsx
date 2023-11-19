import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { StyledSection } from '../mui/CustomComponents';
import MainMenu from '../components/main-menu/MainMenu';

export default function Home() {
    return (
        <StyledSection>
            <Container>
                <MainMenu />
                <div>
                    <Outlet />
                </div>
            </Container>
        </StyledSection>
    );
}
