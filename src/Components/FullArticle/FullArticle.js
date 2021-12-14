import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getArticle } from '../../Store/Actions/articleActions';

import './FullArticle.scss';

const FullArticle = () => {
    
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticle(location.state.title));
    }, []);

    const article = useSelector(state => state.articleReducers.article);

    return (
        <div className='full-article'>
            <div className='header'>
                <div className='rest'>
                    <h5>Source</h5>
                    <p>{article?.source ? article.source.name : null}</p>
                    <h5>Date</h5>
                    <p>{article?.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : null}</p>
                    <h5>Author</h5>
                    <p>{article?.author ? article.author : null}</p>
                </div>
                <img src={article?.urlToImage ? article.urlToImage : null} alt='article' />
            </div>
            <div className='divider'></div>
            <h3>{article?.title ? article.title : null}</h3>
            <p>{article?.content ? article.content : null}</p>
        </div>
    );
};

export default FullArticle;