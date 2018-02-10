import { links } from "../statics/index";
import axios from "axios";
import {GET_LINKS} from './actions';

const DEFAULT_STATE = {
  links: links
};

const getLinks = (state, action) => {
    try {
        return state;
    } catch (e){
        return state;
    }
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_LINKS:
        return getLinks(state, action);
    default:
      return state;
  }
};

export default rootReducer;
