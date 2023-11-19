import { createTheme } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';

import { LinkBehavior } from './CustomComponents';

export const theme = createTheme({
    palette: {
        mode: 'dark'
    },
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
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl',
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true
            },
            styleOverrides: {
                root: {
                    marginTop: '1rem',
                }
            }
        },
        MuiDialog: {
            defaultProps: {
                maxWidth: 'xs',
                fullWidth: true
            }
        }
    },
})
