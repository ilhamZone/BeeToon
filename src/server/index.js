const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
const { authenticated } = require('./middleware');


// Controller
const WebtoonController = require('./controller/webtoons');
const UserController = require('./controller/users');
const EpisodeController = require('./controller/episodes');
const AuthController = require('./controller/auth');
const ImgEpisodeController = require('./controller/img_episodes');
const ShowFavoriteController = require('./controller/favorites');

app.use(bodyParser.json());

app.group('/api/v1', (router) => {
  // Api Users
  router.get('/users', UserController.index);

  router.get('/webtoon/:idW/episode', EpisodeController.showEpisode);

  // Api Episodes berdasarkan id webtoon dan user
  router.get('/user/:idU/webtoon/:idW/episode', EpisodeController.show);
  
  // Api Auth
  router.post('/auth', AuthController.login);

  // Api Register User
  router.post('/register', AuthController.register);

  // Api Webtoon isFavorite pemanggilan /favorite/?isFavorite=true
  router.get('/favorite', authenticated, ShowFavoriteController.ShowWebtonFavorite);

  router.get('/webtoons', WebtoonController.index);

  router.get('/webtoon', WebtoonController.ShowSearchWebtoon); // /webtoons?title=blala

  router.get('/user/:id/webtoon', authenticated, WebtoonController.ShowWebtoonCreation);

  router.post('/user/:id/webtoon', authenticated, WebtoonController.StoreMyCreation);

  router.get('/user/:idUser/webtoon/:idWebtoon', authenticated, WebtoonController.ShowMyCreation);

  router.patch('/user/:idUser/webtoon/:id', authenticated, WebtoonController.UpdateMyCreation);

  router.delete('/user/:idUser/webtoon/:id', authenticated, WebtoonController.DeleteMyCreation);

  router.post('/user/:idUser/webtoon/:idWb/episode', authenticated, EpisodeController.CreateMyEpisode);

  // Api Image Episode Berdasarkan webtoon dan episode 
  router.get('/webtoon/:idM/episode/:idE', ImgEpisodeController.ShowImgEps);

  // Api Image Episode Berdasarkan webtoon dan episode 
  router.get('/user/:idU/webtoon/:idM/episode/:idE', authenticated, ImgEpisodeController.ShowCreationImgEps);

  router.patch('/user/:idU/webtoon/:idM/episode/:id', authenticated, EpisodeController.UpdateMyEpisode);

  router.delete('/user/:idU/webtoon/:idM/episode/:id', authenticated, EpisodeController.DeleteEpisode);

  router.post('/user/:idU/webtoon/:idM/episode/:idE/image', authenticated, ImgEpisodeController.StoreImgEpisode);

  router.delete('/user/:idU/webtoon/:idM/episode/:idE/image/:id', authenticated, ImgEpisodeController.DeleteImgEpisode);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
