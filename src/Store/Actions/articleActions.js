import axios from 'axios';

import * as actionTypes from '../actionTypes';

import { apiKey } from '../../Constants/Constants';

const getArticlesStart = () => ({
    type: actionTypes.GET_ARTICLES_START
});

const getArticlesSuccess = data => ({
    type: actionTypes.GET_ARTICLES_SUCCESS,
    data
});

const getArticlesFail = error => ({
    type: actionTypes.GET_ARTICLES_FAIL,
    error
});

export const getArticles = (search) => {
    return dispatch => {
        dispatch(getArticlesStart());
        const url = 'https://newsapi.org/v2/everything?' +
                    'q=' + search + '&' +
                    'sortBy=popularity&' +
                    'apiKey=' + apiKey;
        axios.get(url)
            .then(res => dispatch(getArticlesSuccess(res.data.articles)))
            .catch(err => dispatch(getArticlesFail(err)));
    };
};

export const getArticle = title => ({ 
    type: actionTypes.GET_ARTICLE, 
    title
});
