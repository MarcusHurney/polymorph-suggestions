import React from 'react';

export default ({ skin: Skin, theme: customTheme, defaultTheme, ...rest }) => {
  const composeCustomCheckboxTheme = (customTheme, defaultTheme) => {
    // checkBoxThemeAPI is an Object which implements the correct shape of a checkbox theme
    let checkBoxThemeAPI = {
      root: '',
      input: '',
      check: '',
      checked: '',
      disabled: '',
      label: ''
    };

    for (const property in checkBoxThemeAPI) {
      if (defaultTheme.hasOwnProperty(property)) {
        checkBoxThemeAPI[property] += defaultTheme[property];
      }

      if (customTheme.hasOwnProperty(property)) {
        checkBoxThemeAPI[property] += ' ' + customTheme[property];
      }

      checkBoxThemeAPI[property].trim();
    }

    return checkBoxThemeAPI;
  };

  const composedTheme = composeCustomCheckboxTheme(customTheme, defaultTheme);

  return <Skin theme={composedTheme} {...rest} />;
};
