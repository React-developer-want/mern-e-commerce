const jwt = require('jsonwebtoken');

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decodedToken = jwt.decode(token);
      const currentTime = Date.now() / 1000;
      console.log({ decodedToken });
      if (decodedToken.exp > currentTime) {
        next();
      } else {
        throw new Error('UNAUTHORIZED');
      }
    } else {
      throw new Error('UNAUTHORIZED');
    }
  } catch (error) {
    res.status(401).json({
      message: 'UNAUTHORIZED'
    })
  }
};