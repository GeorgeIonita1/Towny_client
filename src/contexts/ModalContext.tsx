import { createContext, useContext, useState } from "react";
import { IModalContext, ModalProviderProps } from "../interfaces/interfaces";

const ModalContext = createContext<IModalContext | undefined>(undefined);

const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [modalData, setModalData] = useState({
        type: '',
        message: '',
        solution: ''
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, modalData,  handleCloseModal, handleOpenModal, setModalData }}>
            {children}
        </ModalContext.Provider>
    );
}

const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) throw new Error('useModal must be used within a ModalProvider');

    return context;
}

export { ModalProvider, useModal };
