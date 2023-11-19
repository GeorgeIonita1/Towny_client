import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";

import { IAuthContext, IAuthProviderProps } from "../interfaces/interfaces";
import { fetchRefreshAuth } from "../api/data_fetching";

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [authState, setAuthState] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRefreshAuth()
            .then(res => setTimeout(() => setAuthState(res.data), 800))
            .catch(() => setTimeout(() => navigate('/login'), 800))

        console.log('authCOntext useeffect', authState);
    }, [])

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
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
