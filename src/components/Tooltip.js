import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import utils
import { StringOrElement } from '../utils/props.js';

// import the composeTheme utility function
import composeTheme from '../themes/utils/composeTheme.js';

// import the ToolTip component's constant theme API
import { toolTipThemeAPI } from '../themes/API/toolTip.js';

class Tooltip extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    skin: PropTypes.func.isRequired,
    isAligningRight: PropTypes.bool,
    isOpeningUpwards: PropTypes.bool,
    isBounded: PropTypes.bool,
    tip: StringOrElement,
    theme: PropTypes.object,
    themeOverrides: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    isOpeningUpward: true,
    theme: {}, // theme will now be passed along via the ThemeProvider
    themeOverrides: {}, // custom css/scss from user that adheres to React Polymorph theme API
    themeAPI: { ...toolTipThemeAPI }
  };

  render() {
    // destructuring the props here ensures that variable names
    // do not overwrite each other, only pass on the "...rest" of the props

    const {
      skin: TooltipSkin,
      theme,
      themeOverrides,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <TooltipSkin
        theme={composeTheme(theme, themeOverrides, themeAPI)}
        {...rest}
      />
    );
  }
}
