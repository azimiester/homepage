import { links } from "../statics/index";
import {UPDATE_LINKS} from './actions';

const DEFAULT_STATE = {
  links: []
};

const updateLinks = (state, action) => {
    return Object.assign({}, state, {links: action.payload});
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_LINKS:
        return updateLinks(state, action);
    default:
      return state;
  }
};

export default rootReducer;
