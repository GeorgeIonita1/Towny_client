import { Backdrop, CircularProgress } from '@mui/material';

import { useAuth } from '../../../contexts/AuthContext';

export default function GeneralLoader() {
    const { authState } = useAuth();

    return (
        <Backdrop 
            open={!!!authState}
            sx={{ zIndex: 1000}}
        >
            <CircularProgress color='inherit' />
        </Backdrop>
    )
}
