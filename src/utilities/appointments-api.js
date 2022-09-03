import sendRequest from "./send-request";

const BASE_URL = '/api/appointments';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}