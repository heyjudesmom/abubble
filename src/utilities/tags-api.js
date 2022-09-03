import sendRequest from "./send-request";

const BASE_URL = '/api/tags';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}