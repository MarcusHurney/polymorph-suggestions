import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString, flow } from 'lodash';

// import the reusable ComposeTheme
import composeTheme from '../themes/composeTheme.js';

// import the Checkbox component's default theme
import defaultInputTheme from '../themes/simple/defaultInputTheme.scss';

// import the Input component's constant theme api
import { inputThemeAPI } from '../themes/inputThemeAPI.js';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    onKeyPress: PropTypes.func,
    readOnly: PropTypes.bool,
    skin: PropTypes.func.isRequired,
    theme: PropTypes.object,
    defaultTheme: PropTypes.object,
    themeAPI: PropTypes.object
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: '',
    theme: {},
    defaultTheme: defaultInputTheme,
    themeAPI: { ...inputThemeAPI }
  };

  onChange = event => {
    const { onChange, disabled } = this.props;
    if (disabled) return;
    if (onChange) onChange(this._processValue(event.target.value), event);
  };

  // focus = () => this.skinParts[Input.SKIN_PARTS.INPUT].focus();
  //
  // blur = () => this.skinParts[Input.SKIN_PARTS.INPUT].blur();

  focus = () => {};

  blur = () => {};

  _processValue(value) {
    return flow([this._enforceStringValue, this._enforceMaxLength]).call(
      this,
      value
    );
  }

  _enforceStringValue(value) {
    if (!isString(value))
      throw 'Values passed to Input::onChange must be strings';
    return value;
  }

  _enforceMaxLength(value) {
    const { maxLength } = this.props;
    const isTooLong = maxLength != null && value.length > maxLength;
    return isTooLong ? value.substring(0, maxLength) : value;
  }

  render() {
    // destructuring the props here ensures that variable names
    // do not overwrite each other, only pass on the "...rest" of the props

    const {
      skin: InputSkin,
      theme: customTheme,
      defaultTheme,
      themeAPI,
      ...rest
    } = this.props;

    const composedTheme = composeTheme(defaultTheme, customTheme, themeAPI);

    return <InputSkin theme={composedTheme} {...rest} />;
  }
}

export default Input;
