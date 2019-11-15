import Axios from 'axios';

import * as types from './../types';

export const handleGetEpisode = (params) => ({
  type: types.GET_EPISODE,
  payload: Axios.get(`https://webtoons-restapi.herokuapp.com/api/v1/webtoon/${params}/episode`)
});
