const models = require('../models');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const masters = models.master;

exports.index = (req, res) => {
  masters.findAll().then(result => res.send(result));
};

// Search Webtoon berdsarkan title
exports.ShowSearchWebtoon = (req, res) => {
  const cari = req.query.title;
  console.log(cari);
  masters.findAll({
    where: { title: { [Op.like]: `%${cari}%` } }
  }).then(result => res.send(result));
};

// Show Webtoon Berdasarkan Created By
exports.ShowWebtoonCreation = (req, res) => {
  const id = req.params.id;
  masters.findAll({
    where: { created_by: id }
  }).then(result => res.send(result));
};

// Add Webtoon Oleh User CreatedBy
exports.StoreMyCreation = (req, res) => {
  masters.create(req.body).then(result => res.send(result));
};

// Show Webtoon berdasrkan user dan webtoon yang telah dibuat
exports.ShowMyCreation = (req, res) => {
  masters.findAll({ where: { created_by: req.params.idUser, id: req.params.idWebtoon } })
    .then(result => res.send(result));
};

// Update Webtoon Oleh User CreatedBy
exports.UpdateMyCreation = (req, res) => {
  masters.update(
    req.body,
    { where: { created_by: req.params.idUser, id: req.params.id } }
  ).then(res.send(req.body));
};

// Delete Webtoon berdasarkan webtoon yang dibuat oleh Createdby
exports.DeleteMyCreation = (req, res) => {
  masters.destroy(
    { where: { created_by: req.params.idUser, id: req.params.id } }).then(result => {
      res.send({
        message: 'Delete Successfully',
        result
      });
    });
};
