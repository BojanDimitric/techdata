import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getArticles } from '../../Store/Actions/articleActions';

import HalfBoxArticle from '../HalfBoxArticle/HalfBoxArticle';
import QuarterBoxArticle from '../QuarterBoxArticle/QuarterBoxArticle';
import HalfRectangleArticle from '../HalfRectangleArticle/HalfRectangleArticle';

import './TechData.scss';

const TechData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles('technology'));
    }, []);

    const loading = useSelector(state => state.articleReducers.loading);
    const articles = useSelector(state => state.articleReducers.articles);

    return (
        <div className='tech-data'>
            <h2>Section Title</h2>
            <div className='divider'></div>
            {loading && <p>Loading ...</p>}
            {!loading &&
                <div className='half-box-article-container'>
                    {articles.slice(0, 2).map(article => <HalfBoxArticle article={article} />)}
                </div>
            }
            <h2>Section Title</h2>
            <div className='divider'></div>
            {loading && <p>Loading ...</p>}
            {!loading &&
                <div className='half-square-article-container'>
                    {articles.slice(0, 6).map(article => <HalfRectangleArticle article={article} />)}
                </div>
            }
            <h2>Section Title</h2>
            <div className='divider'></div>
            {loading && <p>Loading ...</p>}
            {!loading &&
                <div className='quarter-box-article-container'>
                    {articles.slice(0, 12).map(article => <QuarterBoxArticle article={article} />)}
                </div>
            }
        </div>
    );
};

export default TechData;