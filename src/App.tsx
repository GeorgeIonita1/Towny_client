import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import FormLogin from './components/FormLogin';
import Header from './components/Header';
import Landing from './pages/Landing';
import { theme } from './mui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component='main' pt='6rem'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<FormLogin />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
