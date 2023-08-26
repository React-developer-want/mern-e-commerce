export const createSession = async (details) => {
  const token = localStorage.getItem('token');
  const url = process.env.REACT_APP_BASE_URL + 'api/v1/stripe/create-checkout-session';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('authorization', token);

  return (await fetch(url, { method: 'POST', body: JSON.stringify(details), headers })).json();
};