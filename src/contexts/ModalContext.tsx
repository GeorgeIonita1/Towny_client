import { createContext, useContext, useState } from "react";
import { IModalContext, IModalProviderProps } from "../interfaces/interfaces";

const ModalContext = createContext<IModalContext | undefined>(undefined); // change to null?

const ModalProvider = ({ children }: IModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            { children }
        </ModalContext.Provider>
    );
}

const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) throw new Error('useModal must be used within a ModalProvider');

    return context;
}

export { ModalProvider, useModal };
