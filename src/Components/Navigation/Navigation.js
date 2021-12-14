import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticles } from '../../Store/Actions/articleActions';

import './Navigation.scss';

const Navigation = () => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch(getArticles(search));
        navigate('/');
    };

    return (
        <div className='navigation'>
            <h2>TechData</h2>
            <input
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search'
            />
            <button 
                type='button'
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Navigation;