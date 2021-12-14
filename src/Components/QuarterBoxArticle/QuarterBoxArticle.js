import React from 'react';
import { useNavigate } from 'react-router-dom';

import './QuarterBoxArticle.scss';

const QuarterBoxArticle = ({ article }) => {

    const navigate = useNavigate();

    return (
        <div 
            className='quarter-box-article'
            onClick={() => navigate('/article', { state: { title: article.title } })}
        >
            <img src={article.urlToImage} alt='article' />
            <h4>{article.title.slice(0, 70) + ' ...'}</h4>
            <p>{article.content.slice(0, 100) + ' ...'}</p>
        </div>
    );
};

export default QuarterBoxArticle;