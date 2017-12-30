import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import the Root Theme API which specifies every component's theme API in React Polymorph
import { rootThemeAPI } from '../themes/API';

// import the composeTheme utility function
import composeTheme from './utils/composeTheme.js';

export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    themeOverrides: PropTypes.object
  };

  static defaultProps = {
    theme: {},
    themeOverrides: {}
  };

  composeFinalTheme = (theme, themeOverrides, rootThemeAPI) => {
    if (_.isEmpty(themeOverrides)) {
      return theme;
    } else {
      let composedTheme = { ...rootThemeAPI };

      for (const componentName in rootThemeAPI) {
        if (theme.hasOwnProperty(componentName)) {
          composedTheme[componentName] = theme[componentName];
        } else {
          // delete property from composedTheme because it will remain empty
          // not every property on rootThemeAPI should be returned
          // only the non-empty props that this.props.theme contains
          delete composedTheme[componentName];
        }

        if (themeOverrides.hasOwnProperty(componentName)) {
          composedTheme[componentName] = composeTheme(
            theme[componentName],
            themeOverrides[componentName],
            rootThemeAPI[componentName]
          );
        }
      }

      return composedTheme;
    }
  };

  render() {
    const { theme, themeOverrides } = this.props;

    const composedTheme = this.composeFinalTheme(
      theme,
      themeOverrides,
      rootThemeAPI
    );

    return this.props.render({ theme, composedTheme });
  }
}
