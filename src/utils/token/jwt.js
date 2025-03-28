const jwt = require('jsonwebtoken');

exports.createToken = (payload, privateKey, options) => {
  const token = jwt.sign({ ...payload }, privateKey, options);

  return token;
};

exports.parseToken = (token, privateKey, options) => {
  const decoded = jwt.verify(token, privateKey, options);

  return decoded;
};
