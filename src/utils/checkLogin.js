import jwt from 'jsonwebtoken';

export const checkUserLoggedIn = () => {
  const token = localStorage.getItem('token');
  
  if (token) {
    const decodedToken = jwt.decode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decodedToken.exp < currentTime) {
      userLogout();
      return false;
    } else {
      return true;
    }
  }
  return false;
};

export const userLogout = () => {
  localStorage.clear();
  window.location.reload();
}