import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { DeepPartial } from '@reduxjs/toolkit';
import { render, RenderResult } from '@testing-library/react';

import { StateSchema, StoreProvider } from 'app/providers/StateProvider';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
    component: ReactNode,
    options: componentRenderOptions = {},
): RenderResult => {
    const { route = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
