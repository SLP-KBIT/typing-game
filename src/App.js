import React from 'react';
import './assets/App.css';
import { Scene } from './components/Scene';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Scene />
      </div>
    );
  }
}
