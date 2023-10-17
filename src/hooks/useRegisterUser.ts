import { useState } from 'react';
import { validateForm } from '../helpers/general_helpers';
import { fetchRegisterUser } from '../api/data_fetching';
import { useModal } from '../contexts/ModalContext';

export default function useRegisterUser(isLogin: boolean) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { handleOpenModal, setModalData } = useModal();

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        if (!validateForm(formData, isLogin, setFormError)) {
            console.log("smth is briken");
            return;
        }

        console.log('all good', formData);

        const response = await fetchRegisterUser(formData);

        if (response.status === 403) {
            const data = await response.json();
            const { type, message, solution } = data;
            handleOpenModal();
            setModalData({ type, message, solution })
            return;
        } else if (response.ok) {
            const data = await response.json();
            const { type, message, solution } = data;
            handleOpenModal();
            setModalData({ type, message, solution })
        } else {
            console.error(response.status);
        }
        
    }

    return { handleUserInput, handleFormSubmit, formError };
}