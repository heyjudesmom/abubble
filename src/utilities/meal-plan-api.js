import sendRequest from "./send-request";

const BASE_URL = '/api/meal-plan';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}

export function deleteAppt(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

