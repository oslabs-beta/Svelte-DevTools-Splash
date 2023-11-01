import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './client/pages/HomePage';
import PageNotFound from './client/pages/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default App;
