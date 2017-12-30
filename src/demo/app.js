import React, { Component } from 'react';

// import ThemeProvider and a full Theme (as an object) to pass as a prop
import ThemeProvider from '../themes/ThemeProvider';
import { simpleTheme } from '../themes/simple';

// import FormField component and a skin (Simple)
import FormField from '../components/FormField';
import FormFieldSimpleSkin from '../skins/simple/FormField';

// import Input component and a skin (Simple)
import Input from '../components/Input';
import InputSimpleSkin from '../skins/simple/Input';

// import Checkbox component and a skin (Simple)
import Checkbox from '../components/Checkbox';
import CheckboxSimpleSkin from '../skins/simple/Checkbox';

// import custom themes for this demo
// these mimic how a user would create some custom css/scss files
// that will get composed with a theme (in this case we only have the simple theme)
// calling these custom 'themes' is really a misnomer because they are just scss
// files that adhere to each React Polymorph component's theme API (see the themes/API files)
import customFormFieldTheme from './customThemes/customFormFieldTheme.scss';
import customInputTheme from './customThemes/customInputTheme.scss';
import customCheckboxTheme from './customThemes/customCheckboxTheme.scss';
import moreCustomCheckbox from './customThemes/moreCustomCheckbox.scss';

import { simpleThemeOverrides } from './customThemes';

// styles for demo
import styles from './app.scss';

class App extends Component {
  state = {
    defaultBox: false,
    customBox: false,
    defaultInputValue: '',
    customInputValue: ''
  };

  handleDefaultToggle = () => {
    this.setState(state => {
      return { ...state, defaultBox: !state.defaultBox };
    });
  };

  handleCustomToggle = () => {
    this.setState(state => {
      return { ...state, customBox: !state.customBox };
    });
  };

  handleDefaultInputChange = e => {
    e.persist();

    this.setState(state => {
      return { ...state, defaultInputValue: e.target.value };
    });
  };

  handleCustomInputChange = e => {
    e.persist();

    this.setState(state => {
      return { ...state, customInputValue: e.target.value };
    });
  };

  render() {
    // the Simple theme is set using ThemeProvider instead of importing it into each component
    // this is more flexible and separates concerns even further (a more functional approach)
    // everybody loves functional programming, lol!
    // Component = Logic, Skin = Markup (HTML),
    // Theme = (css structured to match a standardized theme API (JS object) using CSS modules)

    // simpleTheme is now an object with a property for each component in the React Polymorph library
    // Checkbox, Input, FormField etc... (still need to add the rest)
    // this structure makes it possible to pass the entire theme to a certain section of code
    // or destructure a theme and pass only the properties of the theme that are needed
    // to style that specific section of code.

    // For Example:
    // theme={{...simpleTheme.checkbox, ...simpleTheme.input, ...simpleTheme.formField }}

    // or

    // const destructuredSimpleTheme = {...simpleTheme.checkbox, ...simpleTheme.input};
    // pass it to ThemeProvider like this --> theme={destructuredSimpleTheme}
    // this way you don't have to pass the entire theme object along to ThemeProvider
    // I pass the entire simpleTheme object below, but it doesn't contain css for all components yet
    return (
      <div>
        <ThemeProvider
          theme={simpleTheme}
          themeOverrides={simpleThemeOverrides}
          render={({ theme: simpleTheme, composedTheme }) => (
            <div>
              <h2>
                ThemeProvider code starts here ------------ * ------------
              </h2>

              <br />
              <br />

              <h4>Checkbox with theme set to Simple via ThemeProvider</h4>
              <div className={styles.divider}>
                <Checkbox
                  theme={simpleTheme.checkbox}
                  skin={CheckboxSimpleSkin}
                  checked={this.state.defaultBox}
                  onChange={this.handleDefaultToggle}
                  label="My checkbox"
                />
              </div>

              <br />

              <h4>
                Checkbox with a composed theme: Simple theme set via
                ThemeProvider and custom themes from user set via the
                themeOverrides prop
              </h4>

              <div className={styles.divider}>
                <Checkbox
                  theme={composedTheme.checkbox}
                  skin={CheckboxSimpleSkin}
                  checked={this.state.customBox}
                  onChange={this.handleCustomToggle}
                  label="My checkbox"
                />
              </div>

              <br />

              <h4>
                FormField + nested Input with themes set to Simple via
                ThemeProvider
              </h4>

              <div className={styles.divider}>
                <FormField
                  theme={simpleTheme.formField}
                  skin={FormFieldSimpleSkin}
                  label={'Name'}
                  render={props => (
                    <Input
                      theme={simpleTheme.input}
                      skin={InputSimpleSkin}
                      value={this.state.defaultInputValue}
                      onChange={this.handleDefaultInputChange}
                    />
                  )}
                />
              </div>

              <br />

              <h4>
                Formfield + nested Input with a composed theme: Simple theme set
                via ThemeProvider and custom themes from user set via the
                themeOverrides prop
              </h4>

              <div className={styles.divider}>
                <FormField
                  theme={composedTheme.formField}
                  skin={FormFieldSimpleSkin}
                  label={'Favorite Book'}
                  render={props => (
                    <Input
                      theme={composedTheme.input}
                      skin={InputSimpleSkin}
                      value={this.state.customInputValue}
                      onChange={this.handleCustomInputChange}
                    />
                  )}
                />
              </div>
              <h2>ThemeProvider code ends here ------------ * ------------</h2>
            </div>
          )}
        />

        <br />
        <br />

        <h2>
          Now let's pretend a user isn't using ThemeProvider, but still wants to
          use simple theme composed with their own CSS for a component
        </h2>

        <h4>
          Checkbox with a composed theme: the "theme" prop of this component is
          set to simple theme's checkbox property. The user's custom css
          definitions are set via the "themeOverrides" prop. Simple theme's
          checkbox css and the user's custom css are composed successfully
          without using ThemeProvider! Yessss!
        </h4>

        <div className={styles.divider}>
          <Checkbox
            theme={simpleTheme.checkbox}
            themeOverrides={moreCustomCheckbox}
            skin={CheckboxSimpleSkin}
            checked={this.state.customBox}
            onChange={this.handleCustomToggle}
            label="My checkbox"
          />
        </div>
      </div>
    );
  }
}

export default App;
