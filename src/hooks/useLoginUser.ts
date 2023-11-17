import { useState } from 'react';

import { validateForm } from '../helpers/general_helpers';
import { fetchRegisterUser, fetchSignInUser } from '../api/data_fetching';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function useLoginUser(isLogin: boolean) {
    const navigate = useNavigate();

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
    const { setAuthState } = useAuth();


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

        if (!isLogin) {
            fetchRegisterUser(formData)
                .then(res => {
                    console.log(res);
                    const { type, message, solution } = res.data;
                    setModalData({ type, message, solution });
                    handleOpenModal();
                })
                .catch(res => {
                    console.log(res);
                    const { type, message, solution } = res.response.data;
                    setModalData({ type, message, solution });
                    handleOpenModal();
                });
                
        } else {
            fetchSignInUser(formData)
                .then(res => {
                    console.log(res);
                    setAuthState(res.data);
                    navigate('/');
                })
                .catch(res => {
                    const { type, message, solution } = res.response.data;
                setModalData({ type, message, solution });
                handleOpenModal();
                })
        }
    }

    return { handleUserInput, handleFormSubmit, formError };
}
