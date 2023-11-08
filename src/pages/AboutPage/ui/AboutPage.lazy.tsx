import { lazy } from 'react';

export const AboutPageLazy = lazy(async () => await new Promise((res) => {
    // @ts-ignore
    setTimeout(
        () =>
        // @ts-ignore

            res(import('./AboutPage')),
        1500,
    );
}));
