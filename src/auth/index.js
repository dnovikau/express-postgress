require('dotenv').config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (['/', '/login'].includes(req.path)) {
    return next();
  }

  //authenticate user
  const token =
    req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

const getToken = ({user_id, name}) => {
  const token = jwt.sign({user_id, name}, process.env.SECRET_KEY,
    {
      expiresIn: 3600,
    }
  );

  return token;
}

module.exports = {
  verifyToken,
  getToken,
};