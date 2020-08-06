import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import headerLogo from 'images/misc/logo.svg';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={headerLogo} alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            x{children}
        </Header>
    )
}
