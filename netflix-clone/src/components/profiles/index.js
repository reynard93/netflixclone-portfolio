import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';
import profileLogo from 'images/users/1.png';

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
}

Profiles.Picture = function ProfilesPicture({...restProps }) {
    return <Picture {...restProps} src={profileLogo} />;
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}
