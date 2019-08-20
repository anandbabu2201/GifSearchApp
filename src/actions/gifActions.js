import {
  GET_GIFS,
  API_KEY,
  GIF_URL,
  GIF_TRE_URL,
  GIF_RAN_URL,
  DATA_CHANGE
} from "./types";
import axios from "axios";

let params ={
  api_key:API_KEY,
  limit:25,
  rating:"G",
  offset:0,
  lang:"en",
  q:''
}

export const getGifs = (query) => async dispatch => {
  const res = await axios.get(GIF_URL,{
                    params: {
                     ...params,q:query
                      }});

  dispatch({
    type: GET_GIFS,
    payload: res.data
  });
};

export const getInfintyGifs = (query,limit) => async dispatch => {
  const res = await axios.get(GIF_URL,{
                    params: {
                     ...params,q:query,limit
                      }});

  dispatch({
    type: GET_GIFS,
    payload: res.data
  });
};


export const getTrendingGif = () => async dispatch => {
  const res = await axios.get(GIF_TRE_URL,{
                    params: {
                     ...params
                      }});

  dispatch({
    type: GET_GIFS,
    payload: res.data
  });
};

export const getRandomGif = (randomTag) => async dispatch => {
  const res = await axios.get(GIF_RAN_URL,{
                    params: {
                     ...params,tag:randomTag
                      }});

  dispatch({
    type: GET_GIFS,
    payload: res.data
  });
};

export const getDataChangeEvent=(path, data)=>dispatch=> {
  dispatch ({
    type: DATA_CHANGE,
    payload:{path,data}
  })
}
