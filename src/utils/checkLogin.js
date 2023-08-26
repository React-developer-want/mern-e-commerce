export const checkUserLoggedIn = () => {
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  return !!(email && token);
};

export const userLogout = () => {
  localStorage.clear();
  window.location.reload();
}