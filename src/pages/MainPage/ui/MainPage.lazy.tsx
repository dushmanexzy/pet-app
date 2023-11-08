import { lazy } from 'react';

export const MainPageLazy = lazy(async () => await new Promise((res) => {
    // @ts-ignore
    setTimeout(
        () =>
        // @ts-ignore
            res(import('./MainPage')),
        1500,
    );
}));
