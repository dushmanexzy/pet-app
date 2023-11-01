import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>To Main Page</Link>
            <Link to={'/about'}>To About Page</Link>
            <AppRouter />
        </div>
    );
};

export default App;