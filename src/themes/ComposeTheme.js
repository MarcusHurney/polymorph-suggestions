import _ from 'lodash';

// Each component offered in the React-Polymorph library could have a Theme API
// which is an Object indicating the correct shape of a theme for its
// corresponding skin. This makes the composeTheme function reusable
// for composing a custom theme with a defaultTheme for any component in the library.

// composeTheme utility function
export default (defaultTheme = {}, customTheme = {}, themeAPI = {}) => {
  // check to see if customTheme is an empty object
  // if it is, return the defaultTheme
  // if it is not, compose customTheme and defaultTheme

  if (_.isEmpty(customTheme)) {
    return defaultTheme;
  } else {
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
  }
};
