import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StringOrElement } from '../utils/props';

// import the reusable composeTheme utility function
import composeTheme from '../themes/composeTheme.js';

// import the FormField component's default theme
import defaultFormFieldTheme from '../themes/simple/defaultFormFieldTheme.scss';

// import the FormField component's constant theme api
import { formfieldThemeAPI } from '../themes/formfieldThemeAPI.js';

class FormField extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    skin: PropTypes.func.isRequired,
    label: StringOrElement,
    disabled: PropTypes.bool,
    error: StringOrElement,
    theme: PropTypes.object, // this is the user's custom theme which defaults to a defaultTheme
    defaultTheme: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    disabled: false,
    theme: {},
    defaultTheme: defaultFormFieldTheme,
    themeAPI: { ...formfieldThemeAPI }
  };

  render() {
    // destructuring the props here ensures that variable names
    // do not overwrite each other, only pass on the "...rest" of the props

    const {
      skin: FormFieldSkin,
      theme: customTheme,
      defaultTheme,
      themeAPI,
      ...rest
    } = this.props;

    return (
      <FormFieldSkin
        theme={composeTheme(defaultTheme, customTheme, themeAPI)}
        {...rest}
      />
    );
  }
}

export default FormField;
