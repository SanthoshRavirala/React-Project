import { GET_PROPERTIES, ADD_PROPERTY, DELETE_PROPERTY, PROPERTIES_LOADING } from '../actions/types';

const initialState = {
    properties: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROPERTIES:
            return{
                ...state,
                properties: action.payload,
                loading: false
            };
        case ADD_PROPERTY:
            return{
                ...state,
                properties: [action.payload, ...state]
            };
        case DELETE_PROPERTY:
            return{
                ...state,
                properties: state.properties.filter( property => property._id !== action.payload )
            };
        case PROPERTIES_LOADING:
            return{
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
