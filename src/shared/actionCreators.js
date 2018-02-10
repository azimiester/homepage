import {GET_LINKS} from './actions';

export function getLinks(url){
    return { type: GET_LINKS, payload:url};
}