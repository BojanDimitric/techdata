import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HalfBoxArticle.scss';

const HalfBoxArticle = ({ article }) => {

    const navigate = useNavigate();

    return (
        <div 
            className='half-box-article'
            onClick={() => navigate('/article', { state: { title: article.title } })}
        >
            <img src={article.urlToImage} alt='article' />
            <h3>{article.title}</h3>
            <p>{article.content.slice(0, 800) + ' ...'}</p>
        </div>
    );
};

export default HalfBoxArticle;