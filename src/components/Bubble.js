import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import utils
import { StringOrElement } from '../utils/props.js';

// import the composeTheme utility function
import composeTheme from '../themes/utils/composeTheme.js';

// import the Input component's constant theme API
import { bubbleThemeAPI } from '../themes/API/bubble.js';

class Bubble extends Component {
  static propTypes = {
    children: StringOrElement,
    isOpeningUpwards: PropTypes.bool,
    isTransparent: PropTypes.bool,
    skin: PropTypes.func.isRequired,
    theme: PropTypes.object,
    themeOverrides: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    isTransparent: true,
    theme: {}, // theme will now be passed along via the ThemeProvider
    themeOverrides: {}, // custom css/scss from user that adheres to React Polymorph theme API
    themeAPI: { ...bubbleThemeAPI }
  };

  render() {
    const {
      skin: BubbleSkin,
      theme,
      themeOverrides,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <BubbleSkin
        theme={composeTheme(theme, themeOverrides, themeAPI)}
        {...rest}
      />
    );
  }
}
