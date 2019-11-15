const jwt = require('jsonwebtoken');
const models = require('../models');

const Users = models.user;

// Login Berdasrkan username dan password
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Users.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = `Bearer ${jwt.sign({ userId: user.id }, 'my-secret-key')}`;
      res.send({
        user: user.name,
        token
      });
    } else {
      res.send({
        error: true,
        message: 'Wrong'
      });
    }
  });
};

exports.register = (req, res) => {
  Users.create(req.body).then(result => {
    const token = jwt.sign({ userId: result.id }, 'my-secret-key');
    res.send({
      message: 'Register Succes',
      result,
      token
    });
  });
};
