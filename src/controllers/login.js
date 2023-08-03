const User = require("../models").User;
// const bcrypt = require("bcryptjs");

const auth = require('../auth');

module.exports = {

  login(req, res) {
    const { name, password, id } = req.body.user;
    return User.findByPk(id)
      .then((user) => {
          // Create token
          const token = auth.getToken({user_id: user.user_id, name: user.login});
    
          // save user token
          user.token = token;
          user.custom = 'custom';
    
          // user
          res.status(201).json({...user.dataValues, token});
      })
      .catch((error) => res.status(400).send(error));
  },
};
