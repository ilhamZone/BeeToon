import * as types from './../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  imgEp: []
};

export default function reducerImgEpisode(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_IMG_EPISODE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_IMG_EPISODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        imgEp: action.payload.data
      };

    case `${types.GET_IMG_EPISODE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}