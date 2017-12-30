import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object,
    defaultTheme: PropTypes.object
  };

  static defaultProps = {
    theme: {},
    defaultTheme: {}
  };

  render() {
    const { theme } = this.props;
    console.log(theme);
    return this.props.render({ theme });
  }
}
