import React from 'react';
import { Typing } from './Typing';

export class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressKey: null,
      keystroke: 0,
      scene: 0,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.next = this.next.bind(this);
  }

  handleKeyPress(e) {
    this.setState({
      pressKey: e.key,
      keystroke: this.state.keystroke + 1,
    });
  }

  next() {
    this.setState((state) => ({
      scene: state.scene + 1,
    }));
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress, false);
  }

  render() {
    switch (this.state.scene) {
      case 0:
        return <Start pressKey={this.state.pressKey} next={this.next} />;
      case 1:
        return (
          <Typing
            pressKey={this.state.pressKey}
            keystroke={this.state.keystroke}
            next={this.next}
          />
        );
      default:
        return <End />;
    }
  }
}

class Start extends React.Component {
  componentDidUpdate() {
    if (this.props.pressKey === ' ') {
      this.props.next();
    }
  }

  render() {
    return <div>{'Space To Start'}</div>;
  }
}

function End(props) {
  return <div>{'End'}</div>;
}
