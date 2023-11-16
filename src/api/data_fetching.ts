import axios from 'axios';

import { IUserFormData } from "../interfaces/interfaces";

// const BASE_URL = 'https://kind-elk-sheath-dress.cyclic.app';
const BASE_URL = 'http://localhost:3000';
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
