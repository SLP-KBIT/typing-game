import React from 'react';
import { Typing } from './Typing';

export class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressKey: null,
      keystroke: 0,
      isNext: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({
      pressKey: e.key,
      keystroke: this.state.keystroke + 1,
    });

    if (e.code === 'Space') {
      this.setState({
        isNext: true,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress, false);
  }

  render() {
    return this.state.isNext ? (
      <Typing pressKey={this.state.pressKey} keystroke={this.state.keystroke} />
    ) : (
      <Start />
    );
  }
}

function Start(props) {
  return <div>{'Space To Start'}</div>;
}
