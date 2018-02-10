import axios from 'axios';
import {UPDATE_LINKS} from './actions';

export function updateLinks(links){
    return { type: UPDATE_LINKS, payload:links};
}

export function getLinksFromApi(url){
    return (dispatch) => {
        axios.get(url)
        .then( response => {
            dispatch(updateLinks(response.data.items.map((item)=>{
                return {url: item.url, title: item.title};
            })))
        })
        .catch(err=>{
            console.error('axios error', err);
        })
    }
}
