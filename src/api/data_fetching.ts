import axios from 'axios';

import { IUserFormData } from "../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const HEADERS = { 'Content-Type': 'application/json' };

export const fetchRegisterUser = (formData: IUserFormData) => {
    const { email, password } = formData;

    return axios.post(
        `${BASE_URL}/users/register`,
        { email, password },
        { headers: HEADERS }
    );
}

export const fetchSignInUser = (formData: IUserFormData) => {
    const { email, password } = formData;

    return axios.post(
        `${BASE_URL}/auth/signin`,
        { email, password },
        { headers: HEADERS, withCredentials: true }
    )
}

export const fetchRefreshAuth = () => {
    return axios.get(
        `${BASE_URL}/auth/refresh`,
        { headers: HEADERS, withCredentials: true }
    )
}
