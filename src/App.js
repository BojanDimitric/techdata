import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import TechData from './Components/TechData/TechData';
import FullArticle from './Components/FullArticle/FullArticle';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
				<Route path='/' element={<TechData />} />
        <Route path='/article' element={<FullArticle />} />
			</Routes>
    </div>
  );
};

export default App;
