import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

import './index.scss';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>To Main Page</Link>
            <Link to={'/about'}>To About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;