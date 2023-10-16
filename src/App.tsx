import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Landing from './pages/Landing';
import { theme } from './mui/theme';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login isLogin={true} />} />
          <Route path='/register' element={<Login isLogin={false} />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
