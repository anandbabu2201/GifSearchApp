import {
 GET_GIFS,
 DATA_CHANGE
} from "../actions/types";
const initialState = {
  gifData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        gifData: action.payload
      };

      case DATA_CHANGE :{
        return  {...state,params:action.payload}
    }

    default:
      return state;
  }

}
