// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { ButtonsGroup, ContactUSLink, SignInButton } from './styles';
import connect from './store';

type Props = {
  pathname: string,
  authenticated?: boolean,
  actions: {
    logout: Function
  }
};

const BtnsGroup = ({ pathname }: Props) => (
  <ButtonsGroup>
    <ContactUSLink href="/" active={pathname === '/'}>
      Contact Us
    </ContactUSLink>
    <SignInButton href="/" active={pathname === '/'}>
      Sign In
    </SignInButton>
  </ButtonsGroup>
);

BtnsGroup.defaultProps = {
  authenticated: false
};

BtnsGroup.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(BtnsGroup);
