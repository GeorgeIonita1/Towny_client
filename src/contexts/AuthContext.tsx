import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState(null);

    return (
        <AuthContext.Provider value={null}>
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
