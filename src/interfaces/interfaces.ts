import { ReactNode } from "react";

export interface IFormLoginProps {
    isLogin: boolean;
}

export interface IUserFormData {
    email: string;
    password: string;
    confirmPassword?: string;
}

interface IModalData {
    type: string;
    message: string;
    solution: string;
}

interface IAuthState {
    id: string;
    email: string,
    role: string;
}

export interface IModalContext {
    isModalOpen: boolean;
    modalData: any;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    setModalData: (data: IModalData) => void;
}

export interface IModalProviderProps {
    children: ReactNode;
}

export interface IAuthContext {
    authState: null | IAuthState;
    setAuthState: any; // create proper type
}

export interface IAuthProviderProps {
    children: ReactNode;
}
