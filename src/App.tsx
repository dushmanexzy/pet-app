import React, {Suspense, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

import './styles/index.scss';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
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