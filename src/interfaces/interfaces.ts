import { ReactNode } from "react";

export interface IFormLoginProps {
    isLogin: boolean;
}

export interface IUserFormData {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface IModalContext {
    isModalOpen: boolean;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
}

export interface ModalProviderProps {
    children: ReactNode;
}
