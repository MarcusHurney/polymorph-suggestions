import React from 'react';

export default ({ skin: Skin, theme: customTheme, defaultTheme, ...rest }) => {
  const composeCustomCheckboxTheme = (customTheme, defaultTheme) => {
    // Each component offered in the React-Polymorph library could have a ThemeAPI
    // which is an Object/Class which implements the correct shape of a theme for its
    // corresponding component. Here I've just defined checkBoxThemeAPI in the body
    // of this function, but these could be separated out for each base component in the library

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
