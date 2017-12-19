import React, { Component } from 'react';

import Checkbox from './components/Checkbox';
import CheckboxSimpleSkin from './skins/simple/CheckboxSimpleSkin';

import styles from './app.scss';

// custom theme for checkbox
import custom from './customTheme.scss';

class App extends Component {
  state = {
    defaultBox: false,
    customBox: false
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
            theme={custom}
            skin={CheckboxSimpleSkin}
          />
        </div>
      </div>
    );
  }
}

export default App;
