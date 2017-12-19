import React from 'react';

export default ({
  skin: Skin,
  theme: customTheme,
  defaultTheme,
  themeAPI,
  ...rest
}) => {
  const composeCustomCheckboxTheme = (customTheme, defaultTheme, themeAPI) => {
    // Each component offered in the React-Polymorph library could have a ThemeAPI
    // which is an Object indicating the correct shape of a theme for its
    // corresponding component. This makes the ComposeTheme function reusable
    // for any component in the library.

    let composedTheme = { ...themeAPI };

    for (const property in themeAPI) {
      if (defaultTheme.hasOwnProperty(property)) {
        composedTheme[property] += defaultTheme[property];
      }

      if (customTheme.hasOwnProperty(property)) {
        composedTheme[property] += ' ' + customTheme[property];
      }

      composedTheme[property].trim();
    }

    return composedTheme;
  };

  return (
    <Skin
      theme={composeCustomCheckboxTheme(customTheme, defaultTheme, themeAPI)}
      {...rest}
    />
  );
};
