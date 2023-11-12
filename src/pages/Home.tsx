import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { SectionElement } from '../mui/CustomComponents';
import MainMenu from '../components/main-menu/MainMenu';

export default function Home() {
    return (
        <SectionElement>
            <Container>
                <MainMenu />
                <div>
                    <Outlet />
                </div>
            </Container>
        </SectionElement>
    );
}
