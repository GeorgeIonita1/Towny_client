import { createContext, useContext, useState } from "react";
import { IModalContext, ModalProviderProps } from "../interfaces/interfaces";

const ModalContext = createContext<IModalContext | undefined>(undefined);

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, handleCloseModal, handleOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
}

const useModal = () => {
    return useContext(ModalContext);
}

export { ModalProvider, useModal };