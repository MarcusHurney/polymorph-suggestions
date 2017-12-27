import React, { Component } from 'react';

import FormField from './components/FormField';
import FormFieldSimpleSkin from './skins/simple/FormFieldSimpleSkin';

import Input from './components/Input';
import InputSimpleSkin from './skins/simple/InputSimpleSkin';

import Checkbox from './components/Checkbox';
import CheckboxSimpleSkin from './skins/simple/CheckboxSimpleSkin';

import styles from './app.scss';

// custom theme for checkbox
import customCheckbox from './customCheckboxTheme.scss';
import customFormField from './customFormFieldTheme.scss';
import customInput from './customInputTheme.scss';

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
    return (
      <div>
        <h1>Checkbox with default theme</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <Checkbox
            checked={this.state.defaultBox}
            onChange={this.handleDefaultToggle}
            label="My checkbox"
            skin={CheckboxSimpleSkin}
          />
        </div>

        <br />

        <h1>Checkbox with custom and default themes composed together</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <Checkbox
            checked={this.state.customBox}
            onChange={this.handleCustomToggle}
            label="My checkbox"
            theme={customCheckbox}
            skin={CheckboxSimpleSkin}
          />
        </div>

        <br />

        <h1>FormField & Input w/ Default Theme</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <FormField
            label={'Name'}
            skin={FormFieldSimpleSkin}
            render={props => (
              <Input
                value={this.state.defaultInputValue}
                onChange={this.handleDefaultInputChange}
                skin={InputSimpleSkin}
              />
            )}
          />
        </div>

        <br />

        <h1>FormField & Input w/ custom themes composed w/ default theme</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <FormField
            label={'Favorite Book'}
            skin={FormFieldSimpleSkin}
            theme={customFormField}
            render={props => (
              <Input
                value={this.state.customInputValue}
                onChange={this.handleCustomInputChange}
                skin={InputSimpleSkin}
                theme={customInput}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
