import sendRequest from "./send-request";

const BASE_URL = '/api/chores';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}

export function deleteChore(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

