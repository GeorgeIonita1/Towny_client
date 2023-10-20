import { Container } from '@mui/material';

import { SectionElement } from '../mui/CustomComponents';
import MainMenu from '../components/main-menu/MainMenu';

export default function Home() {
    return (
        <SectionElement>
            <Container>
                <MainMenu></MainMenu>
            </Container>
        </SectionElement>
    );
}
