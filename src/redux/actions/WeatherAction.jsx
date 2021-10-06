import axios from "axios";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../type";
import { KEY_API } from "./../KeyApi";

export const getData = (city) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}`,
      })
        .then((res) => {
          dispatch({ type: GET_WEATHER, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: SET_ERROR, payload: "This city is not exist !!!" });
        });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
};

export const setError = (msg) => {
  return {
    type: SET_ERROR,
    payload: msg,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
