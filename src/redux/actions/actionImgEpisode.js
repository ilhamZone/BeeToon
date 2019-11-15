import Axios from 'axios';

import * as types from './../types';

export const handleGetImgEpisode = (idWb, idEp) => ({
  type: types.GET_IMG_EPISODE,
  payload: Axios.get(`https://webtoons-restapi.herokuapp.com/api/v1/webtoon/${idWb}/episode/${idEp}`)
});
