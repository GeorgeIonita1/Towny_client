import { useState } from 'react';
import { validateForm } from '../helpers/general_helpers';
import { fetchRegisterUser } from '../api/data_fetching';

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

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("george", formData)
        
        if (!validateForm(formData, isLogin, setFormError)) {
            console.log("smth is briken");
            return;
        }

        console.log('all good', formData)

        const response = await fetchRegisterUser(formData);

        if (!response.ok) {
            const data = await response.json();
            console.log(data)
            return;
        }
        console.log('asta nu trebuie sa apara')
    }

    return { handleUserInput, handleFormSubmit, formError };
}