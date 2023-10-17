// todo: type of setFormError

import { IUserFormData } from "../interfaces/interfaces";

export const validateForm = (formData: IUserFormData, isLogin: boolean, setFormError: any) => {
    const errors = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'Invalid email address';
    }

    if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword && !isLogin) {
        errors.confirmPassword = 'Password must match';
    }

    setFormError(errors);
    return Object.values(errors).every(error => error === '');
}
