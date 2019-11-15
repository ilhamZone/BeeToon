import * as types from './../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  web: []
};

export default function reducerWebtoon(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_WEBTOON}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_WEBTOON}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        web: action.payload.data
      };

    case `${types.GET_WEBTOON}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}
