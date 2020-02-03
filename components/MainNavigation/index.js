// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import {
  Navigation,
  MainNavWrap,
  NavItem,
  NavLink,
  ButtonsGroup,
  ContactUSLink,
  SignInButton
} from './styles';
import menus from './menus';

type Props = {
  pathname: string,
  authenticated: boolean,
  open: boolean,
  logout: Function
};

/* const LinkList = ({ pathname, authenticated, logout }: Props) => ( */
const MainNavigation = ({ pathname, open }: Props) => (
  <Navigation className={`${open ? 'show' : 'hidden'}`}>
    <MainNavWrap>
      {menus.map(menu => (
        <NavItem key={menu.slug}>
          <Link prefetch href={`/${menu.slug}`} passHref>
            <NavLink
              className={`${pathname === `/${menu.slug}` ? 'activeLink' : ''}`}
            >
              {menu.caption}
            </NavLink>
          </Link>
        </NavItem>
      ))}
      <ButtonsGroup>
        <ContactUSLink href="/" active={pathname === '/'}>
          Contact Us
        </ContactUSLink>
        <SignInButton href="/" active={pathname === '/'}>
          Sign In
        </SignInButton>
      </ButtonsGroup>
    </MainNavWrap>
  </Navigation>
);

MainNavigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default MainNavigation;
