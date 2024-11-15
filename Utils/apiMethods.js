
import {API_BASE_URL} from './Constants'

export const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  const isJSON = contentType && contentType.includes('application/json');
  let data;

  if (isJSON) {
    data = await response.json();
  } else {
    data = await response.text();
  }



  if (!response.ok) {
    switch (response.statusCode) {
      case 401:
        throw new Error('Unauthorized access. Please log in.');
      case 403:
        throw new Error('Forbidden access. You do not have the right permissions.');
      case 404:
        throw new Error('Resource not found.');
      case 500:
        throw new Error('Internal server error. Please try again later.');
      default:
        throw new Error(data.message || 'An unknown error occurred.');
    }
  }

  return data;
};

export const getAPICall = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  
  return handleResponse(response);
};

export const postAPICall = async (endpoint, data) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const updateAPICall = async (endpoint, data) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// export const deleteAPICall = async (endpoint) => {
//   const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     method: 'DELETE',
//   });
//   return handleResponse(response);
// };

export const deleteAPICall = async (endpoint, data) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};