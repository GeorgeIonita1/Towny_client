import { IUserFormData } from "../interfaces/interfaces";

const BASE_URL = 'http://localhost:6677';
const HEADERS = { 'Content-Type': 'application/json' };

export const fetchRegisterUser = (formData: IUserFormData) => {
    const { email, password } = formData;

    return fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: HEADERS
    });
}

export const fetchSignInUser = (formData: IUserFormData) => {
    const { email, password } = formData;

    return fetch(`${BASE_URL}/auth/signin`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: HEADERS
    })
}
