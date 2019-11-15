const models = require('../models');

const Favorites = models.favourite;
const Masters = models.master;

// Show webtoon is favorite = true
exports.ShowWebtonFavorite = (req, res) => {
  const favorite = req.query.isFavorite;
  if (favorite == 'true') {
    Favorites.findAll({
      where: { is_favorite: 1 },
      attributes: ['is_favorite'],
      include: [{
        model: Masters,
        as: 'Master',
        attributes: ['title', 'genre', 'image']
      }]
    }).then(result => res.send(result));
  } else {
    Favorites.findAll({
      where: { is_favorite: 0 },
      attributes: ['is_favorite'],
      include: [{
        model: Masters,
        as: 'Master',
        attributes: ['title', 'genre', 'image']
      }]
    }).then(hasil => res.send(hasil));
  }
};
