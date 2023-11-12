import { createContext, useContext, useEffect, useState } from "react";
import { IAuthContext, IAuthProviderProps } from "../interfaces/interfaces";
import { fetchRefreshAuth } from "../api/data_fetching";

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [authState, setAuthState] = useState(null);

    const handleRefreshAuth = () => {
        console.log('click');
        fetchRefreshAuth();
    }

    useEffect(() => {
        console.log('authCOntext useeffect');
        // fetchRefreshAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ handleRefreshAuth }}>
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
