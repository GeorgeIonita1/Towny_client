import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Landing from './pages/Landing';
import { theme } from './mui/theme';
import Login from './pages/Login';
import GeneralModal from './components/modals/GeneralModal';
import Dashboard from './components/dashboard/Dashboard';
import Home from './pages/Home';
import Drivers from './components/drivers/Drivers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='drivers' element={<Drivers />} />
          </Route>
          <Route path='/landing' element={<Landing />} />
          <Route path='/login' element={<Login isLogin={true} />} />
          <Route path='/register' element={<Login isLogin={false} />} />
        </Routes>
      </Box>
      <GeneralModal />
    </ThemeProvider>
  )
}

export default App
