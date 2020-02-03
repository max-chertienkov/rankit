// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Burgers } from './styles';
import connect from './store';

const BurgersBar = props => (
  <Burgers onClick={props.toggle}>
    <i className="fas fa-bars" />
  </Burgers>
);

BurgersBar.defaultProps = {
  toggle: false
};

BurgersBar.propTypes = {
  toggle: PropTypes.func
};

export default connect(BurgersBar);
