const models = require('../models');

const ImgEpisodes = models.img_episode;

// Show Page episode berdasarkan episode
// exports.ImgEpsShow2 = (req, res) => {
//   Episodes.findOne({ where: { masters_id: req.params.id } }).then(episode => {
//     ImgEpisodes.findAll({
//       where: { episodes_id: episode.id },
//       attributes: ['id', 'page', 'image'],
//       include: [{
//         model: Episodes,
//         as: 'Episode',
//         attributes: ['id', 'title']
//       }]
//     }).then(result => res.send(result));
//   });
// };

// show image berdasarkan id webtoon dan id episode
exports.ShowImgEps = (req, res) => {
  ImgEpisodes.findAll({
    where: { masters_id: req.params.idM, episodes_id: req.params.idE },
    attributes: ['id', 'page', 'image']
  }).then(result => res.send(result));
};

// show image berdasarkan id webtoon dan id episode
exports.ShowCreationImgEps = (req, res) => {
  ImgEpisodes.findAll({
    where: { created_by: req.params.idU, masters_id: req.params.idM, episodes_id: req.params.idE },
    attributes: ['id', 'page', 'image', 'created_by', 'masters_id', 'episodes_id']
  }).then(result => res.send(result));
};

exports.StoreImgEpisode = (req, res) => {
  const { page, image } = req.body;
  ImgEpisodes.create({
    page,
    image,
    created_by: req.params.idU,
    masters_id: req.params.idM,
    episodes_id: req.params.idE
  }).then(result => {
    res.send({
      message: 'Add Image Episode Successfully',
      result
    });
  });
};

exports.DeleteImgEpisode = (req, res) => {
  ImgEpisodes.destroy({
    where: {
      created_by: req.params.idU,
      masters_id: req.params.idM,
      episodes_id: req.params.idE,
      id: req.params.id
    }
  }).then(result => {
    res.send({
      message: 'Delete Image Episode Successfully',
      result
    });
  });
};

