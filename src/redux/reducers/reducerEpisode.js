import * as types from './../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  ep: []
};

export default function reducerEpisode(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_EPISODE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_EPISODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        ep: action.payload.data
      };

    case `${types.GET_EPISODE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}
