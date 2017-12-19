import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import helpers
import { StringOrElement } from '../utils/props.js';

// import the reusable ComposeTheme
import ComposeTheme from '../themes/ComposeTheme.js';

// import the Checkbox component's constant ThemeAPI
import { CheckboxThemeAPI } from '../themes/checkboxThemeAPI.js';

// import the Checkbox component's default theme
import defaultTheme from '../themes/simple/DefaultCheckboxTheme.scss';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: StringOrElement,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    skin: PropTypes.func.isRequired,
    theme: PropTypes.object,
    defaultTheme: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    theme: {},
    defaultTheme,
    themeAPI: { ...CheckboxThemeAPI }
  };

  render() {
    return <ComposeTheme {...this.props} />;
  }
}

export default Checkbox;
