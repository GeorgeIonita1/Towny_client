import { Container, CssBaseline } from '@mui/material';

import FormLogin from './components/FormLogin';
import Header from './components/Header';

function App() {
  return (
    <>
    <CssBaseline />
      <Header />
      <Container>
        <FormLogin />
      </Container>
    </>
  )
}

export default App