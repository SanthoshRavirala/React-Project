import axios from 'axios';
import { GET_PROPERTIES, PROPERTIES_LOADING } from '../actions/types';

export const getProperties = () => dispatch => {
    dispatch(setPropertiesLoading());
    axios 
    .get('/api/properties')
    .then(res => 
        dispatch({
            type: GET_PROPERTIES,
            payload: res.data
        })
    );
};

export const setPropertiesLoading = () => {
    return{
        type: PROPERTIES_LOADING
    };
};