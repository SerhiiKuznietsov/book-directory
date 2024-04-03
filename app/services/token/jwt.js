const jwt = require('jsonwebtoken');
const algorithm = 'HS512';
const expiresIn = 60 * 60 * 24;

exports.tokenMethodsFactory = (privateKey, options = {}) => {
  options.algorithm = options.algorithm || algorithm;

  options.expiresIn = options.expiresIn || expiresIn;

  const createToken = (payload) => {
    const token = jwt.sign(payload, privateKey, options);

    return token;
  };

  const parseToken = (token) => {
    const decoded = jwt.verify(token, privateKey, options);

    return decoded;
  };

  return {
    createToken,
    parseToken,
  };
};
