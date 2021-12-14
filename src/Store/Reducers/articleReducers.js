import * as actionTypes from '../actionTypes';

const initialState = { articles: [] };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLES_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_ARTICLES_SUCCESS: 
            return {
                ...state,
                loading: false,
                articles: action.data,
                error: null
            };
        case actionTypes.GET_ARTICLES_FAIL: 
            return {
                ...state,
                articles: false,
                error: action.error
            };
        case actionTypes.GET_ARTICLE: 
            return {
                ...state,
                article: state.articles.filter(article => article.title === action.title)[0]
            };
        default: 
            return state;
    };
};

export default articleReducer;