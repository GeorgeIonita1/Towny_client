const BASE_URL = 'http://localhost:6677';
const HEADERS = { 'Content-Type': 'application/json' };

export const fetchRegisterUser = (formData: IUserFormData) => {
    return fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: HEADERS
    });
}
