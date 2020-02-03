// @flow
import React from 'react';
import PropTypes from 'prop-types';
import MainNavigation from '../MainNavigation';
import BtnsGroup from '../BtnsGroup';
import BurgersBar from '../BurgersBar';
import { LogoWrapper, HeaderLogo, LogoImg } from './styles';
import connect from './store';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    let { open } = this.state;
    open = !open;
    this.setState({ open });
  }

  render() {
    return (
      <header
        id="header"
        className={`nav-header ${
          this.state.open === true ? 'mobile-nav-opened' : ''
        }`}
      >
        <LogoWrapper>
          <HeaderLogo href="/">
            <LogoImg src="/static/imgs/logo.png" alt="Emergent" />
          </HeaderLogo>
        </LogoWrapper>
        <MainNavigation
          pathname={this.props.pathname}
          authenticated={this.props.authenticated}
          logout={this.props.actions.logout}
          open={this.state.open}
        />
        <BtnsGroup pathname={this.props.pathname} />
        <BurgersBar toggle={this.toggle} />
      </header>
    );
  }
}

Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Header);
