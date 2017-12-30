import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import utils
import { StringOrElement } from '../utils/props.js';

// import the composeTheme utility function
import composeTheme from '../themes/utils/composeTheme.js';

// import the Checkbox component's constant theme API
import { checkboxThemeAPI } from '../themes/API/checkbox.js';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: StringOrElement,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    skin: PropTypes.func.isRequired,
    theme: PropTypes.object,
    themeOverrides: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    theme: {}, // theme will now be passed along via the ThemeProvider
    themeOverrides: {}, // custom css/scss from user that adheres to React Polymorph theme API
    themeAPI: { ...checkboxThemeAPI }
  };

  render() {
    const {
      skin: CheckboxSkin,
      theme,
      themeOverrides,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <CheckboxSkin
        theme={composeTheme(theme, themeOverrides, themeAPI)}
        {...rest}
      />
    );
  }
}

export default Checkbox;
