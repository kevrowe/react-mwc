import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/checkbox/Checkbox'
import CheckboxLabel from './components/checkbox/CheckboxLabel'
import FormField from './components/formfield/FormField'

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleReactIsAwesome = this.toggleReactIsAwesome.bind(this)

    this.state = {
      reactIsAwesome: true
    }
  }
  toggleReactIsAwesome() {
    this.setState({
      reactIsAwesome: !this.state.reactIsAwesome
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <FormField>
            <Checkbox
              id={'react-is-awesome'}
              checked={this.state.reactIsAwesome}
              labelId={'react-is-awesome-label'}
              toggleChecked={this.toggleReactIsAwesome}
            />
            <CheckboxLabel
              id={'react-is-awesome-label'}
              for={'react-is-awesome'}
            >
              React is currently { this.state.reactIsAwesome ? 'awesome' : 'not awesome :(' }
            </CheckboxLabel>
          </FormField>
        </div>
      </div>
    );
  }
}

export default App;
