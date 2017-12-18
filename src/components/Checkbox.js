import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StringOrElement } from '../utils/props';
import ComposeTheme from '../themes/ComposeTheme';
import defaultTheme from '../themes/simple/DefaultCheckboxTheme.scss';

class Checkbox extends Component {
  static propTypes = {
    skin: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    label: StringOrElement,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    theme: PropTypes.object,
    defaultTheme: PropTypes.object
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    theme: {},
    defaultTheme
  };

  render() {
    return <ComposeTheme {...this.props} />;
  }
}

export default Checkbox;
