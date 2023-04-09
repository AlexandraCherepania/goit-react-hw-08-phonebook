

import axios from 'axios';

axios.defaults.baseURL = 'https://6431a946d4518cfb0e669178.mockapi.io/';

export async function fetchContacts() {
  const response = await axios.get('contacts');
  return response.data;
}

export async function addContact(data) {
  const response = await axios.post('contacts/', data);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}