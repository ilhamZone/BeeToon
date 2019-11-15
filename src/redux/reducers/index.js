import { combineReducers } from 'redux';

import reducerWebtoon from './reducerWebtoon';
import reducerEpisode from './reducerEpisode';
import reducerImgEpisode from './reducerImgEpisode';
import reducerLogin from './reducerLogin';

const appReducer = combineReducers({
  webtoon: reducerWebtoon,
  episode: reducerEpisode,
  imgEpisode: reducerImgEpisode,
  login: reducerLogin
});

export default appReducer;
