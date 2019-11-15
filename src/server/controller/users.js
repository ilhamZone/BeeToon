const models = require('../models');

const users = models.user;

exports.index = (req, res) => {
  users.findAll().then(result => res.send(result));
};
