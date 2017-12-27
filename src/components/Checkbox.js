import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import helpers
import { StringOrElement } from '../utils/props.js';

// import the reusable composeTheme utility function
import composeTheme from '../themes/composeTheme.js';

// import the Checkbox component's constant theme api
import { checkboxThemeAPI } from '../themes/checkboxThemeAPI.js';

// import the Checkbox component's default theme
import defaultCheckboxTheme from '../themes/simple/defaultCheckboxTheme.scss';

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
    defaultTheme: defaultCheckboxTheme,
    themeAPI: { ...checkboxThemeAPI }
  };

  render() {
    const {
      skin: CheckboxSkin,
      theme: customTheme,
      defaultTheme,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <CheckboxSkin
        theme={composeTheme(defaultTheme, customTheme, themeAPI)}
        {...rest}
      />
    );
  }
}

export default Checkbox;
