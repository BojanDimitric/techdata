import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HalfRectangleArticle.scss';

const HalfRectangleArticle = ({ article }) => {

    const navigate = useNavigate();

    return (
        <div 
            className='half-rectangle-article'
            onClick={() => navigate('/article', { state: { title: article.title } })}
        >
            <img src={article.urlToImage} alt='article' />
            <div className='rest'>
                <h4>{article.title.slice(0, 50) + ' ...'}</h4>
                <p>{article.content.slice(0, 70) + ' ...'}</p>
            </div>
        </div>
    );
};

export default HalfRectangleArticle;