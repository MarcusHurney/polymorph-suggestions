import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import utils
import { StringOrElement } from '../utils/props.js';

// import the composeTheme utility function
import composeTheme from '../themes/utils/composeTheme.js';

// import the Button component's constant theme API
import { buttonThemeAPI } from '../themes/API/button.js';

class Button extends Component {
  static propTypes = {
    label: StringOrElement,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    skin: PropTypes.func.isRequired,
    theme: PropTypes.object,
    themeOverrides: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    disabled: false,
    theme: {}, // theme will now be passed along via the ThemeProvider
    themeOverrides: {}, // custom css/scss from user that adheres to React Polymorph theme API
    themeAPI: { ...buttonThemeAPI }
  };

  render() {
    const {
      skin: ButtonSkin,
      theme,
      themeOverrides,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <ButtonSkin
        theme={composeTheme(theme, themeOverrides, themeAPI)}
        {...rest}
      />
    );
  }
}

export default Button;
