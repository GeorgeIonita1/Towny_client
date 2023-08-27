import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';
import { Route, Routes, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import FormLogin from './components/FormLogin';
import Header from './components/Header';
import Landing from './pages/Landing';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        underline: 'hover'
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<FormLogin />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
