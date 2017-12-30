import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object,
    themeOverrides: PropTypes.object
  };

  static defaultProps = {
    theme: {},
    themeOverrides: {}
  };

  render() {
    const { theme, themeOverrides } = this.props;
    // const composedTheme = composeTheme(theme, themeOverrides, themeAPI);

    return this.props.render({ theme });
  }
}
