import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../type";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error:''
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
