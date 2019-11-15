const models = require('../models');

const Episodes = models.episode;

exports.index = (req, res) => {
  Episodes.findAll().then(result => res.send(result));
};


// tampil episode berdasarkan id_masters
exports.showEpisode = (req, res) => {
  Episodes.findAll({ where: { masters_id: req.params.idW } })
    .then(result => res.send(result));
};
//tampil episode berdasarkan id_master dan id user
exports.show = (req, res) => {
  Episodes.findAll({ where: { masters_id: req.params.idW, created_by: req.params.idU } })
    .then(result => res.send(result));
};

exports.CreateMyEpisode = (req, res) => {
  const { title, image } = req.body;
  Episodes.create({
    title,
    image,
    masters_id: req.params.idWb,
    created_by: req.params.idUser
  }).then(result => {
    res.send({
      message: 'Add Episode Succesfully',
      result
    });
  });
};

exports.UpdateMyEpisode = (req, res) => {
  Episodes.update(
    req.body,
    { where: { created_by: req.params.idU, masters_id: req.params.idM, id: req.params.id } }
  ).then(res.send(req.body));
};

exports.DeleteEpisode = (req, res) => {
  Episodes.destroy({
    where: { created_by: req.params.idU, masters_id: req.params.idM, id: req.params.id }
  }).then(result => {
    res.send({
      message: 'Delete episode successfully',
      result
    });
  });
};

