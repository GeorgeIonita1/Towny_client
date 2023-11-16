import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";

import { IAuthContext, IAuthProviderProps } from "../interfaces/interfaces";
import { fetchRefreshAuth } from "../api/data_fetching";

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [authState, setAuthState] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('first line of auth useEffect')
        fetchRefreshAuth()
            .then(res => {
                console.log('are we fetching again?', res.data);
                setAuthState(res.data);
                navigate('/')
            })
            .catch(() => {
                console.log('tre sa te loghezi')
                navigate('/login');
            })

        console.log('authCOntext useeffect', authState);
    }, [])

    return (
        <AuthContext.Provider value={{ setAuthState }}>
            { children }
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useModal must be used within a ModalProvider');

    return context;
}

export { AuthProvider, useAuth };
