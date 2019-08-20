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
        let {path,data}=action.payload;
        let { pathParams } = state;
        path=path.split(".")
        if(path.length>1)
          pathParams[path[0]][path[1]]=data;
        else
         pathParams[path]=data;
        return  {...state,pathParams:pathParams}
    }

    default:
      return state;
  }

}
