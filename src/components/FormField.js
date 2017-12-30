import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StringOrElement } from '../utils/props';

// import the composeTheme utility function
import composeTheme from '../themes/utils/composeTheme.js';

// import the FormField component's constant theme API
import { formfieldThemeAPI } from '../themes/API/formField.js';

class FormField extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    skin: PropTypes.func.isRequired,
    label: StringOrElement,
    disabled: PropTypes.bool,
    error: StringOrElement,
    theme: PropTypes.object,
    themeOverrides: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    disabled: false,
    theme: {}, // theme will now be passed along via the ThemeProvider
    themeOverrides: {}, // custom css/scss from user that adheres to React Polymorph theme API
    themeAPI: { ...formfieldThemeAPI }
  };

  render() {
    // destructuring the props here ensures that variable names
    // do not overwrite each other, only pass on the "...rest" of the props

    const {
      skin: FormFieldSkin,
      theme,
      themeOverrides,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <FormFieldSkin
        theme={composeTheme(theme, themeOverrides, themeAPI)}
        {...rest}
      />
    );
  }
}

export default FormField;
