import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT
} from "../actions/types";
const initialState = {
  gifData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(e => e.id !== action.payload)
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          e => (e.id === action.payload.id ? (e = action.payload) : e)
        )
      };

    default:
      return state;
  }
}
