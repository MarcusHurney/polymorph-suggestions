import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadApp } from 'actions/app';
import { toggleCheckbox } from 'actions/checkbox';

import Checkbox from '../components/Checkbox';
import CheckboxSimpleSkin from '../skins/simple/raw/CheckboxSimpleSkin';

import styles from './app.scss';

// custom theme for checkbox
import custom from './customTheme.scss';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    const mixedDefaultAndCustom = { ...styles, title: custom.title };

    return (
      <div>
        <h1>Checkbox with default theme</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <Checkbox
            checked={this.props.checked}
            onChange={this.props.dispatchToggle}
            label="My checkbox"
            skin={CheckboxSimpleSkin}
          />
        </div>

        <br />

        <h1>Checkbox with custom and default themes composed together</h1>
        <div style={{ height: '300px', width: '300px' }}>
          <Checkbox
            checked={this.props.checked}
            onChange={this.props.dispatchToggle}
            label="My checkbox"
            theme={custom}
            skin={CheckboxSimpleSkin}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    checked: state.checkbox.checked
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadApp: () => {
      dispatch(loadApp());
    },
    dispatchToggle: boolean => {
      dispatch(toggleCheckbox(boolean));
    }
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
